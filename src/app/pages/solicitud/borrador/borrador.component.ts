import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Catsolicitud } from '../../../model/catsolicitud.model';
import { CatSeguimientoSol } from '../../../model/catsegimientosolicitud.model';
import { SeguimientoSolService } from '../../../service/seguimientosol.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-borrador',
  templateUrl: './borrador.component.html',
  styles: []
})
export class BorradorComponent implements OnInit {

  editForm: FormGroup;
  solicitud: Catsolicitud;
  segSolicitud: CatSeguimientoSol;


  constructor(
    private route: ActivatedRoute,
    private bs: SeguimientoSolService,
    protected authService: AuthService
    ) {

     }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.segSolicitud = res;
        console.log(this.segSolicitud.sgsComentario);
      });
    });
  }

}
