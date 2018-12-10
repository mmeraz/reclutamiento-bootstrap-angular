import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catcontecnicos } from 'src/app/model/catcontecnicos.model';
import { ConTecnicosService } from 'src/app/service/cat.contecnicos.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-cat-contecnicos',
  templateUrl: './cat-contecnicos.component.html',
  providers: [ConTecnicosService]
})
export class CatContecnicosComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayContecnicos: Catcontecnicos[];
  allContecnicos: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private contecnicosService: ConTecnicosService,
    private fb: FormBuilder, private bs: ConTecnicosService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.contecnicosService.getContecnicos().subscribe(result => {
      this.allContecnicos = result;
      this.dtTrigger.next();
    });
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.contecnicosService.getContecnicos().subscribe(result => {
        this.allContecnicos = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, cotConocimiento, cotTipo) {
      swal({
        title: 'Está seguro?',
      text: `¿Seguro desea eliminar el conocimiento ${cotTipo}?, ${cotConocimiento}? `,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.contecnicosService.deleteBusiness(id).subscribe(data => {
            this.allContecnicos = this.allContecnicos.filter(c => c.cotIdconcimientostec !== id);
          });
          swal('Eliminado!', 'Se ha eliminado el conocimientos técnicos.', 'success');
        }
        this.rerender();
      });
  }

}
