import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catseguicandidato } from '../../../../model/catseguicandidato.model';
import { Subject } from 'rxjs';
import { Catentrevista } from '../../../../model/catentrevista.model';
import { SeguimientoCandService } from '../../../../service/seguimientocandidato.service';
import { EntrevistaService } from '../../../../service/cat.entrevista.service';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-candiva-tivalidacion',
  templateUrl: './candiva-tivalidacion.component.html',
  styles: []
})
export class CandivaTivalidacionComponent implements OnInit {

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
    this.serviceSecCandidato.getSecSeguimientoCandidatoValidadosTI().subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });

}

}
