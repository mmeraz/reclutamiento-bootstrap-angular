import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from 'src/app/model/catsegimientosolicitud.model';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-rechazados-comercial',
  templateUrl: './rechazados-comercial.component.html',
  styles: []
})
export class RechazadosComercialComponent implements OnInit {


  ngOnInit() {
  }

}
