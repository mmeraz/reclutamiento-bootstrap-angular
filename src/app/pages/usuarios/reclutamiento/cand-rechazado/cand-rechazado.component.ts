import { Component, OnInit } from '@angular/core';
import { Catseguicandidato } from '../../../../model/catseguicandidato.model';
import { Catcandidato } from '../../../../model/catcandidato.model';
import { Catsolicitud } from '../../../../model/catsolicitud.model';
import { SeguimientoCandService } from '../../../../service/seguimientocandidato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../../../../service/mail.service';
import { SeguimientoSolService } from '../../../../service/seguimientosol.service';

@Component({
  selector: 'app-cand-rechazado',
  templateUrl: './cand-rechazado.component.html',
  styles: []
})
export class CandRechazadoComponent implements OnInit {

  segCandidato: Catseguicandidato;
  allSeguimiento: any;
  candidato: Catcandidato;
  solicitud: Catsolicitud;
  comentario: string;

  constructor(
    private bs: SeguimientoCandService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceSegSol: SeguimientoSolService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusinessEnt(params['id']).subscribe(res => {
        this.allSeguimiento = res;

      });
    });
  }

}
