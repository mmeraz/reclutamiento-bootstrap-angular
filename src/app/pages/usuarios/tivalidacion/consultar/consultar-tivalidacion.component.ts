import { Component, OnInit } from '@angular/core';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';

@Component({
  selector: 'app-consultar-tivalidacion',
  templateUrl: './consultar-tivalidacion.component.html',
  styles: []
})
export class ConsultarTivalidacionComponent implements OnInit {

  constructor(private serviceSeguimiento: SeguimientoSolService) { }

  ngOnInit() {
  }

}
