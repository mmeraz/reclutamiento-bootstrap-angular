import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catsolicitud } from '../../../../../../model/catsolicitud.model';
import { Subject } from 'rxjs';
import { SeguimientoSolService } from '../../../../../../service/seguimientosol.service';
import { AuthService } from '../../../../../../service/auth.service';

@Component({
  selector: 'app-media-pend-respuesta',
  templateUrl: './media-pend-respuesta.component.html',
  styles: []
})
export class MediaPendRespuestaComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arraySolicitudes: Catsolicitud[];
  allSolicitud: any = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private serviceSolicitud: SeguimientoSolService,
              protected authservice: AuthService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
   this.serviceSolicitud.getSgsSeguimientoPendientePrioridad('Media').subscribe(result => {
      this.allSolicitud = result;
      this.dtTrigger.next();
    }) ;
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    window.location.reload();
  }

}
