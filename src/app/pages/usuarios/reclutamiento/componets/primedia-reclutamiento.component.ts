import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from 'src/app/model/catsegimientosolicitud.model';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';

@Component({
  selector: 'app-primedia-reclutamiento',
  templateUrl: './primedia-reclutamiento.component.html',
  styles: []
})
export class PrimediaReclutamientoComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayAreas: Catsolicitud[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private serviceSolicitud: SeguimientoSolService, protected authservice: AuthService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.serviceSolicitud.getSgsSeguimientoSolicitudValidadas('Media').subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }

  getListSize(): number {
    return 0;
  }

}
