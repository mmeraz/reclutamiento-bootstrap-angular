import { Component, OnInit } from '@angular/core';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { SeguimientoCandService } from '../../../service/seguimientocandidato.service';

@Component({
  selector: 'app-index-tivalidacion',
  templateUrl: './index-tivalidacion.component.html',
  styles: []
})
export class IndexTivalidacionComponent implements OnInit {
  numer: number;
  allAreas: any = [];
  allCandXValidar: any = [];
  constructor(private serviceSgsSolicitud: SeguimientoSolService,
              private serviceSecCandidato: SeguimientoCandService) {
               }

  ngOnInit() {
    this.serviceSgsSolicitud.getSgsSeguimientoSolicitudXValidar().subscribe(result => {
      this.allAreas = result;
    });
    this.numer = this.allAreas.length;

    this.serviceSecCandidato.getSecSeguimientoPendienteValidacion().subscribe(result => {
      this.allCandXValidar = result;
    });
    this.numer = this.allCandXValidar.length;

  }

}
