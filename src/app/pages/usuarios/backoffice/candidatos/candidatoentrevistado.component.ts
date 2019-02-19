import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguimientoCandService } from 'src/app/service/seguimientocandidato.service';
import { DataTableDirective } from 'angular-datatables';
import { Catcandidato } from 'src/app/model/catcandidato.model';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { Catseguicandidato } from 'src/app/model/catseguicandidato.model';




@Component({
  selector: 'app-candidatoentrevistado',
  templateUrl: './candidatoentrevistado.component.html',
  styles: []
})
export class CandidatoentrevistadoComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arraySolicitudes: Catcandidato[];
  allSolicitud: Catseguicandidato[] = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private serviceSolicitud: SeguimientoCandService,
              protected authservice: AuthService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
   this.serviceSolicitud.getSecSeguimientoActivoAll().subscribe(result => {
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
