import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-priba-liderreclu',
  templateUrl: './priba-liderreclu.component.html',
  styles: []
})
export class PribaLiderrecluComponent implements OnInit {
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
    this.serviceSolicitud.getSgsSeguimientoSolicitudValidadas('Baja').subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
  });
  }

}
