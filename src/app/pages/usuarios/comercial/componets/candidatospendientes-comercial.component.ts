import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catseguicandidato } from 'src/app/model/catseguicandidato.model';
import { Subject } from 'rxjs';
import { SeguimientoCandService } from 'src/app/service/seguimientocandidato.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-candidatospendientes-comercial',
  templateUrl: './candidatospendientes-comercial.component.html',
  styles: []
})
export class CandidatospendientesComercialComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayCandidatos: Catseguicandidato[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private serviceSecCandidato: SeguimientoCandService, protected authservice: AuthService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.serviceSecCandidato.getSecSeguimientoPendienteValidacion().subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }

  getListSize(): number {
    return 0;
  }

}
