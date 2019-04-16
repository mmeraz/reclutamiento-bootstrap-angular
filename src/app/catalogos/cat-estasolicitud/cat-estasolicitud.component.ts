import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catestasolicitud } from 'src/app/model/catestasolicitud.model';
import { EstasolicitudService } from 'src/app/service/cat.estasolicitud.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-cat-estasolicitud',
  templateUrl: './cat-estasolicitud.component.html',
  providers: [EstasolicitudService]
})
export class CatEstasolicitudComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayEstasolicitud: Catestasolicitud[];
  allEstasolicitud: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private estasolicitudService: EstasolicitudService,
    private fb: FormBuilder, private bs: EstasolicitudService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    protected authservice: AuthService) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.estasolicitudService.getestasolicituds().subscribe(result => {
      this.allEstasolicitud = result;
      this.dtTrigger.next();
    });
    console.log(this.allEstasolicitud);
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.estasolicitudService.getestasolicituds().subscribe(result => {
        this.allEstasolicitud = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, estDescripcion) {
      swal({
        title: '¿Está seguro?',
      text: `¿Seguro desea eliminar al estatus solicitud ${estDescripcion}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, ¡eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.estasolicitudService.deleteBusiness(id).subscribe(data => {
            this.allEstasolicitud = this.allEstasolicitud.filter(c => c.estIdestatus !== id);
          });
          swal('¡Eliminado!', 'Se ha eliminado el estatus solicitud.', 'success');
          this.rerender();
        }
      });
  }

}
