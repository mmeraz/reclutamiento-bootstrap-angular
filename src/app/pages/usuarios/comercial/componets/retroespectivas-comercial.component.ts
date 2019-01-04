import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catseguicandidato } from 'src/app/model/catseguicandidato.model';
import { Subject } from 'rxjs';
import { SeguimientoCandService } from 'src/app/service/seguimientocandidato.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-retroespectivas-comercial',
  templateUrl: './retroespectivas-comercial.component.html',
  styles: []
})
export class RetroespectivasComercialComponent implements OnInit {

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
    this.serviceSecCandidato.getSecSeguimientoEntrevistado().subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }

  getListSize(): number {
    return 0;
  }

}
