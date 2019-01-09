import { Component, OnInit } from '@angular/core';
import { EntrevistaService } from 'src/app/service/cat.entrevista.service';
import { Catentrevista } from 'src/app/model/catentrevista.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Catcandidato } from 'src/app/model/catcandidato.model';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { SeguimientoCandService } from 'src/app/service/seguimientocandidato.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-citacliente-backoffice',
  templateUrl: './citacliente-backoffice.component.html',
  styles: []
})
export class CitaclienteBackofficeComponent implements OnInit {
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
      this.bs.addEntrevistaAgendada(this.candidato, this.comentario);
      this.router.navigate(['/IndexBackoffice']);
      swal({
        position: 'top',
        type: 'success',
        title: `¡¡Solicitud Validada con éxito!!`,
        showConfirmButton: false,
        timer: 2000
      });
    });
    this.update();
  }

  update(): void {
    window.location.reload();
  }
}
