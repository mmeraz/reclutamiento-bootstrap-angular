import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/service/cat.area.service';
import { Catarea } from 'src/app/model/catarea.model';
import { PrioridadService } from 'src/app/service/cat.prioridad.service';
import { Catprioridad } from 'src/app/model/catprioridad.model';
import { TipoVacanteService } from 'src/app/service/cat.tipvacante.service';
import { CatTipvacanteComponent } from '../cat-tipvacante/cat-tipvacante.component';
import { Cattipovacante } from 'src/app/model/cattipovacante.model';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { Catsolidioma } from 'src/app/model/catsolidioma.model';

@Component({
  selector: 'app-cat-solicitud',
  templateUrl: './cat-solicitud.component.html',
  providers: [AreaService, PrioridadService, TipoVacanteService]
})
export class CatSolicitudComponent implements OnInit {
  addForm: FormGroup;
  allAreas: Catarea[] = [];
  allPrioridad: Catprioridad[] = [];
  allVacantes: Cattipovacante[] = [];
  solicitud: Catsolicitud = null;
  prioridad: Catprioridad = null;
  requerimiento: Catarea = null;
  listaIdioma: Catsolidioma[] = [];

  constructor(private areaService: AreaService,
    private prioridadService: PrioridadService,
    private tipoVacanteService: TipoVacanteService,
    private fb: FormBuilder) {

    }

  ngOnInit() {
    // this.areaService.getAreas().subscribe((data: Catarea[]) => this.allAreas = data);
    // this.prioridadService.getSolicitudes().subscribe((data: Catprioridad[]) => this.allPrioridad = data);

  }

  createForm() {
    this.addForm = this.fb.group({
    });
  }

  addSolicitud() {
    console.log(this.requerimiento.arnIdarean);
  }

  add() {
    console.log('add');
    // this.listaIdioma.push(idiomaE);
    // idiomaE: Catsolidioma
  }
}
