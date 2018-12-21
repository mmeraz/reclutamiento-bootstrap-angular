import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from 'src/app/model/catsegimientosolicitud.model';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';

@Component({
  selector: 'app-prialta-reclutamiento',
  templateUrl: './prialta-reclutamiento.component.html',
  styles: []
})
export class PrialtaReclutamientoComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayAreas: Catsolicitud[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private serviceSolicitud: SolicitudService, protected authservice: AuthService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };


  this.serviceSolicitud.getSolicitudesA().subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }

  getListSize(): number {
    return 0;
  }

}