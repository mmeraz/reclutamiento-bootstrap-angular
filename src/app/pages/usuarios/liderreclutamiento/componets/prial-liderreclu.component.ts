import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { Subject } from 'rxjs';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-prial-liderreclu',
  templateUrl: './prial-liderreclu.component.html',
  styles: []
})
export class PrialLiderrecluComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private serviceSolicitud: SeguimientoSolService, protected authservice: AuthService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.serviceSolicitud.getSgsSeguimientoSolicitudValidadas('Alta').subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
  });
  }
}
