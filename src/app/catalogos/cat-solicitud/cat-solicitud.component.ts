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
import { Catidioma } from 'src/app/model/catidioma.model';
import { IdiomaService } from 'src/app/service/cat.idioma.service';
import { Catcliente } from 'src/app/model/catcliente.model';
import { ClienteService } from 'src/app/service/cat.cliente.service';
import { Catcontactcliente } from 'src/app/model/catcontactcliente.model';
import { Catjornadalab } from 'src/app/model/catjornadalab.model';
import { JornadaLAbService } from 'src/app/service/cat.jornadalab.service';
import { Catcontecnicos } from 'src/app/model/catcontecnicos.model';
import { ConTecnicosService } from 'src/app/service/cat.contecnicos.service';
import { Catcomphabilidades } from 'src/app/model/catcomphabilidades.model';
import { CompHabilidadesService } from 'src/app/service/cat.comphabilidades.service';
import { PrePercepcionService } from 'src/app/service/cat.prepercepcion.service';
import { CatPrepercepcionComponent } from '../cat-prepercepcion/cat-prepercepcion.component';
import { Catprepercepcion } from 'src/app/model/catprepercepcion.model';

@Component({
  selector: 'app-cat-solicitud',
  templateUrl: './cat-solicitud.component.html',
  providers: [AreaService, PrioridadService,
    TipoVacanteService, IdiomaService,
    ClienteService, JornadaLAbService,
    ConTecnicosService, ]
})
export class CatSolicitudComponent implements OnInit {
  addForm: FormGroup;
  allAreas: Catarea[];
  allPrioridad: Catprioridad[];
  allVacantes: Cattipovacante[];
  allConocimiento: Catcontecnicos[];
  allIdiomas: Catidioma[];
  allClientes: Catcliente[];
  allJornada: Catjornadalab[];
  allHabilidades: Catcomphabilidades[];
  allPercepciones: Catprepercepcion[];

  solicitud: Catsolicitud = null;

  prioridad: Catprioridad = null;
  requerimiento: Catarea = null;
  vacante: Cattipovacante = null;
  cliente: Catcliente = null;
  conocimiento: Catcontecnicos = null;
  idioma: Catidioma = null;
  contactoCliente: Catcontactcliente = null;
  percepcion: Catprepercepcion = null;
  idiomaSol: Catsolidioma = null;
  nvIdioma: string;

  contactosCliente: Catcontactcliente[] = [];
  listaIdioma: Catsolidioma[] = [];

  constructor(private areaService: AreaService,
    private prioridadService: PrioridadService,
    private tipoVacanteService: TipoVacanteService,
    private idiomaService: IdiomaService,
    private clienteService: ClienteService,
    private jornadaService: JornadaLAbService,
    private conocimientoService: ConTecnicosService,
    private habilidadService: CompHabilidadesService,
    private percepcionService: PrePercepcionService,
    private fb: FormBuilder) {

    }

  ngOnInit() {
    this.areaService.getAreas().subscribe((data: Catarea[]) => this.allAreas = data);
    this.prioridadService.getPrioridades().subscribe((data: Catprioridad[]) => this.allPrioridad = data);
    this.tipoVacanteService.getVacantes().subscribe((data: Cattipovacante[]) => this.allVacantes = data);
    this.idiomaService.getidiomass().subscribe((data: Catidioma[]) => this.allIdiomas = data);
    this.clienteService.getClientes().subscribe((data: Catcliente[]) => this.allClientes = data);
    this.jornadaService.getJornadalabs().subscribe((data: Catjornadalab[]) => this.allJornada = data);
    this.conocimientoService.getCotecnicoss().subscribe((data: Catcontecnicos[]) => this.allConocimiento = data);
    this.habilidadService.getComphabilidadess().subscribe((data: Catcomphabilidades[]) => this.allHabilidades = data);
    this.percepcionService.getAreas().subscribe((data: Catprepercepcion[]) => this.allPercepciones = data);
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
    this.idiomaSol.idiIdioma = this.idioma;
    // this.idiomaSol.sliNivel = this.nvIdioma;
    this.listaIdioma.push();
  }

  addContacto() {
    console.log('addContac');
    this.contactosCliente.push(this.contactoCliente);
    this.contactoCliente = null;
  }
}
