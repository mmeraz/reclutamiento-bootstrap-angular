import { Component, OnInit } from '@angular/core';
import { Catseguicandidato } from '../../../model/catseguicandidato.model';
import { Catcandidato } from '../../../model/catcandidato.model';
import { Catsolicitud } from '../../../model/catsolicitud.model';
import { SeguimientoCandService } from '../../../service/seguimientocandidato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguimientoSolService } from '../../../service/seguimientosol.service';

@Component({
  selector: 'app-rechazado-cliente-cand',
  templateUrl: './rechazado-cliente-cand.component.html',
  styles: []
})
export class RechazadoClienteCandComponent implements OnInit {

  segCandidato: Catseguicandidato;
  allSeguimiento: any;
  candidato: Catcandidato;
  solicitud: Catsolicitud;
  comentario: string;
  allSolicitud: any;

  constructor(
    private bs: SeguimientoCandService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceSegSol: SeguimientoSolService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.allSeguimiento = res;
        // this.allSolicitud = this.allSeguimiento.cndDatoscandidato.entEntrevista;

      });
    });
  }

}
