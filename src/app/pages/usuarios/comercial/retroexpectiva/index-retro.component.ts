import { Component, OnInit } from '@angular/core';
import { Catentrevista } from '../../../../model/catentrevista.model';
import { Catcandidato } from '../../../../model/catcandidato.model';
import { Catsolicitud } from '../../../../model/catsolicitud.model';
import { EntrevistaService } from '../../../../service/cat.entrevista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SeguimientoCandService } from '../../../../service/seguimientocandidato.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-index-retro',
  templateUrl: './index-retro.component.html',
  styles: []
})
export class IndexRetroComponent implements OnInit {

  private entrevista: Catentrevista;
  candidato: Catcandidato;
  solicitud: Catsolicitud;
  comentario: string;
  constructor(
    private serviceEnt: EntrevistaService,
    private route: ActivatedRoute,
    private bs: SeguimientoCandService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceEnt.getEntrevistaByC(params['id']).subscribe(res => {
        this.entrevista = res;
        this.candidato = this.entrevista.cndDatoscandidato;
        this.solicitud = this.entrevista.solSolicitud;
      });
    });
  }

  updateBusiness() {
    this.route.params.subscribe(params => {
      this.bs.addAceptado(this.candidato, this.comentario);
      this.router.navigate(['/IndexBackoffice']);
      swal({
        position: 'top',
        type: 'success',
        title: `¡¡Candidato contratado!!`,
        showConfirmButton: false,
        timer: 2500
      });
    });
    // this.update();
  }

  update(): void {
    window.location.reload();
  }

}
