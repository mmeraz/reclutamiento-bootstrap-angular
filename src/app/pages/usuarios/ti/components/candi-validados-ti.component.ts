import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catseguicandidato } from '../../../../model/catseguicandidato.model';
import { Subject } from 'rxjs';
import { SeguimientoCandService } from '../../../../service/seguimientocandidato.service';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-candi-validados-ti',
  templateUrl: './candi-validados-ti.component.html',
  styles: []
})
export class CandiValidadosTiComponent implements OnInit {


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
    this.serviceSecCandidato. getSecSeguimientoPendienteEntrevista().subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }

  getListSize(): number {
    return 0;
  }

}
