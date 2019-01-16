import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguimientoCandService } from 'src/app/service/seguimientocandidato.service';
import { catchError } from 'rxjs/operators';
import { EntrevistaService } from 'src/app/service/cat.entrevista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from 'src/app/service/mail.service';
import { AuthService } from 'src/app/service/auth.service';
import { Catentrevista } from 'src/app/model/catentrevista.model';
import { Catcandidato } from 'src/app/model/catcandidato.model';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { throwError, Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Catseguicandidato } from 'src/app/model/catseguicandidato.model';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  private entrevista: Catentrevista;
  candidato: Catcandidato;
  arrayCandidatos: Catseguicandidato;
  constructor(private route: ActivatedRoute, private router: Router,
    private serviceEnt: EntrevistaService, private serviceSecCandidato: SeguimientoCandService, protected authservice: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceEnt.getEntrevistaByC(params['id']).subscribe(res => {
        this.entrevista = res;
        this.candidato = this.entrevista.cndDatoscandidato;
      });
    });

  }

}
