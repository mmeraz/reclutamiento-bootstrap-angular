import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrioridadService } from 'src/app/service/cat.prioridad.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-cat-prioridad',
  templateUrl: './cat-prioridad.component.html',
  providers: [PrioridadService]
})
export class CatPrioridadComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  allPrioridad: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private prioridadService: PrioridadService,
    private fb: FormBuilder, private bs: PrioridadService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.prioridadService.getPrioridades().subscribe(result => {
      this.allPrioridad = result;
      this.dtTrigger.next();
    });
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.prioridadService.getPrioridades().subscribe(result => {
        this.allPrioridad = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, priNombre) {
      swal({
        title: 'Está seguro?',
      text: `¿Seguro desea eliminar la prioridad ${priNombre}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.prioridadService.deleteBusiness(id).subscribe(data => {
            this.allPrioridad = this.allPrioridad.filter(c => c.priNombre !== id);
          });
          swal('Eliminado!', 'Se ha eliminado prioridad.', 'success');
          this.rerender();
        }
      });
  }

}
