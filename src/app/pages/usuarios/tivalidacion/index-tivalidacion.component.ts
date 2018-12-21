import { Component, OnInit } from '@angular/core';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';

@Component({
  selector: 'app-index-tivalidacion',
  templateUrl: './index-tivalidacion.component.html',
  styles: []
})
export class IndexTivalidacionComponent implements OnInit {
  numer: number;
  allAreas: any = [];
  constructor(private serviceSgsSolicitud: SeguimientoSolService) { }

  ngOnInit() {
    this.serviceSgsSolicitud.getSgsSeguimientoSolicitudXValidar().subscribe(result => {
      this.allAreas = result;
    });
    this.numer = this.allAreas.length;
  }

}
