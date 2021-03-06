import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catseguicandidato } from '../../../../../../model/catseguicandidato.model';
import { Catentrevista } from '../../../../../../model/catentrevista.model';
import { Subject } from 'rxjs';
import { SeguimientoCandService } from '../../../../../../service/seguimientocandidato.service';
import { AuthService } from '../../../../../../service/auth.service';
import { EntrevistaService } from '../../../../../../service/cat.entrevista.service';

@Component({
  selector: 'app-cand-rech-ti',
  templateUrl: './cand-rech-ti.component.html',
  styles: []
})
export class CandRechTiComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayCandidatos: Catseguicandidato[];
  arrayEntrevista: Catentrevista[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private entrevistaService: EntrevistaService, protected authservice: AuthService,
              ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.entrevistaService.getSecCandidatoRechTI().subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
}


}
