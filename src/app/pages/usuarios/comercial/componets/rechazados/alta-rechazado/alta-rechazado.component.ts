import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from '../../../../../../model/catsegimientosolicitud.model';
import { Subject } from 'rxjs';
import { SeguimientoSolService } from '../../../../../../service/seguimientosol.service';
import { AuthService } from '../../../../../../service/auth.service';

@Component({
  selector: 'app-alta-rechazado',
  templateUrl: './alta-rechazado.component.html',
  styles: []
})
export class AltaRechazadoComponent implements OnInit {

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
    this.serviceSgsSolicitud.getSgsSeguimietoRechazadasTI('Alta').subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }

  getListSize(): number {
    return 0;
  }
}
