import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from 'src/app/service/cat.cliente.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-cat-cliente',
  templateUrl: './cat-cliente.component.html',
  providers: [ClienteService]
})
export class CatClienteComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  allCliente: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private clienteService: ClienteService,
    private fb: FormBuilder, private bs: ClienteService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.clienteService.getClientes().subscribe(result => {
      this.allCliente = result;
      this.dtTrigger.next();
    });
    console.log(this.allCliente);
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.clienteService.getClientes().subscribe(result => {
        this.allCliente = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }
  deleteBusiness(id, cliNombre) {
    swal({
      title: 'Está seguro?',
    text: `¿Seguro desea eliminar al área ${cliNombre}?`,
      type: 'warning',
      showCancelButton: true,
    confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
      this.clienteService.deleteBusiness(id).subscribe(data => {
          this.allCliente = this.allCliente.filter(c => c.cliNombre !== id);
        });
        swal('Eliminado!', 'Se ha eliminado el área.', 'success');
        this.rerender();
      }
    });
  }
}

