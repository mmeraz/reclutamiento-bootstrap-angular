import { Component, OnInit } from '@angular/core';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';

@Component({
  selector: 'app-index-tivalidacion',
  templateUrl: './index-tivalidacion.component.html',
  styles: []
})
export class IndexTivalidacionComponent implements OnInit {
  numer: number;
  constructor(private seguimientosol: SeguimientoSolService) { }

  ngOnInit() {
    this.numer = this.seguimientosol.getSgsSeguimientoSolicitudXValidar().forEach.length;
  }

}
