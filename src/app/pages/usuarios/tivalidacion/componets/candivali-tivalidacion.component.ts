import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catcandidato } from '../../../../model/catcandidato.model';
import { Subject } from 'rxjs';
import { SeguimientoCandService } from '../../../../service/seguimientocandidato.service';
import { AuthService } from '../../../../service/auth.service';
import { Catseguicandidato } from '../../../../model/catseguicandidato.model';
import { Catentrevista } from 'src/app/model/catentrevista.model';
import { EntrevistaService } from '../../../../service/cat.entrevista.service';

@Component({
  selector: 'app-candivali-tivalidacion',
  templateUrl: './candivali-tivalidacion.component.html',
  styles: []
})
export class CandivaliTivalidacionComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayCandidatos: Catseguicandidato[];
  arrayEntrevista: Catentrevista[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private serviceSecCandidato: SeguimientoCandService, protected authservice: AuthService,
              private serviceEntrevista: EntrevistaService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.serviceEntrevista.getSeguimientoEntrevista().subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
    // this.serviceSecCandidato.getSecSeguimientoPendienteValidacion().subscribe(result => {
    //   this.allSeguimiento = result;
    //   this.dtTrigger.next();
    // });
  }

}
