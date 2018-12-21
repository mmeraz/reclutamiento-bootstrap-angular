import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from 'src/app/model/catsegimientosolicitud.model';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-tablasol-tivalidacion',
  templateUrl: './tablasol-tivalidacion.component.html',
  styles: []
})
export class TablasolTivalidacionComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayAreas: CatSeguimientoSol[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private serviceSgsSolicitud: SeguimientoSolService, protected authservice: AuthService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.serviceSgsSolicitud.getSgsSeguimientoSolicitudXValidar().subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }
}
