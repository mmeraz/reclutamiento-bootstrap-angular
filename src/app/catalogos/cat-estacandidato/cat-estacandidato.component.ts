import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Catestacandidato } from 'src/app/model/catestacandidato.model';
import { EstaCandidatoService  } from 'src/app/service/cat.estacandidato.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2';
import { AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-cat-estacandidato',
  templateUrl: './cat-estacandidato.component.html',
  providers: [EstaCandidatoService]
})
export class CatEstacandidatoComponent implements OnInit {
  angForm: FormGroup;
  arrayEstatus: Catestacandidato[];
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  allEstatus: any = [];
  dtTrigger: Subject<any> = new Subject();


  constructor( private estatuscandidatoService: EstaCandidatoService,
    protected authservice: AuthService) {
    }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.estatuscandidatoService.getEstatusCandidatos().subscribe(result => {
      this.allEstatus = result;
      this.dtTrigger.next();
    });
    console.log(this.allEstatus);
  }
  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.estatuscandidatoService.getEstatusCandidatos().subscribe(result => {
        this.allEstatus = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(escIdestatus, escDescripcion) {
      swal({
        title: '¿Está seguro?',
      text: `¿Seguro desea eliminar el estatus ${escDescripcion}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, ¡eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.estatuscandidatoService.deleteBusiness(escIdestatus).subscribe(data => {
            this.allEstatus = this.allEstatus.filter(e => e.escIdestatus !== escIdestatus);
          });
          swal('¡Eliminado!', 'Se ha eliminado el estatus.', 'success');
          this.rerender();
        }
      });
  }

}
