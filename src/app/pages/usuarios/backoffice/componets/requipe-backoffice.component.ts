import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from '../../../../model/catsegimientosolicitud.model';
import { Subject } from 'rxjs';
import { SeguimientoSolService } from '../../../../service/seguimientosol.service';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-requipe-backoffice',
  templateUrl: './requipe-backoffice.component.html',
  styles: []
})
export class RequipeBackofficeComponent implements OnInit {

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
    this.serviceSgsSolicitud.getSgsSeguimietoAceptadaXPerdida().subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }

  getListSize(): number {
    return 0;
  }

}
