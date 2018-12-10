import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { Subject } from 'rxjs';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-solicitud',
  templateUrl: './list-solicitud.component.html',
  styles: []
})
export class ListSolicitudComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayAreas: Catsolicitud;
  allSolicitud: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private solicitudService: SolicitudService,
    private fb: FormBuilder, private bs: SolicitudService,
    private http: HttpClient) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.solicitudService.getSolicitudes().subscribe(result => {
      this.allSolicitud = result;
      this.dtTrigger.next();
    });
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    window.location.reload();
  }

  /**
   * Negocio para eleminar
   */
  deleteBusiness(id, solFolio) {
    swal({
      title: 'Está seguro?',
    text: `¿Seguro desea eliminar la solicitud ${solFolio}?`,
      type: 'warning',
      showCancelButton: true,
    confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
      this.solicitudService.deleteBusiness(id).subscribe(data => {
          this.allSolicitud = this.allSolicitud.filter(c => c.arnIdarea !== id);
        });
        swal('¡Eliminado!', 'Se ha eliminado la solicitud.', 'success');
        this.rerender();
      }
    });
  }

}
