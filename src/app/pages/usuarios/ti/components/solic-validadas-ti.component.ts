import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguiSolicitudService } from 'src/app/service/cat.seguisolicitud.service';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from 'src/app/model/catsegimientosolicitud.model';
import { Subject } from 'rxjs';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-solic-validadas-ti',
  templateUrl: './solic-validadas-ti.component.html',
  styles: []
})
export class SolicValidadasTiComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayAreas: CatSeguimientoSol[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private serviceSgsSolicitud: SeguimientoSolService,  protected authservice: AuthService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.serviceSgsSolicitud.getSgsSeguimientoSolicitudValidadas('Alta').subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }

}
