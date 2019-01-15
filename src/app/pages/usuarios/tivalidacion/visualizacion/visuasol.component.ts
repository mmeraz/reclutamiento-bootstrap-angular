import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../../../service/cat.area.service';
import { PrioridadService } from '../../../../service/cat.prioridad.service';
import { IdiomaService } from '../../../../service/cat.idioma.service';
import { TipoVacanteService } from '../../../../service/cat.tipvacante.service';
import { ClienteService } from '../../../../service/cat.cliente.service';
import { JornadaLAbService } from '../../../../service/cat.jornadalab.service';
import { ConTecnicosService } from '../../../../service/cat.contecnicos.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Catsolicitud } from '../../../../model/catsolicitud.model';
import { Catarea } from '../../../../model/catarea.model';
import { Catprioridad } from '../../../../model/catprioridad.model';
import { CatTipoVacante } from '../../../../model/cattipovacante.model';
import { Catcontecnicos } from '../../../../model/catcontecnicos.model';
import { Catidioma } from '../../../../model/catidioma.model';
import { Catcliente } from '../../../../model/catcliente.model';
import { Catjornadalab } from '../../../../model/catjornadalab.model';
import { Catcomphabilidades } from '../../../../model/catcomphabilidades.model';
import { Catprepercepcion } from '../../../../model/catprepercepcion.model';
import { Catequipo } from '../../../../model/catequipo.model';
import { Catperfil } from '../../../../model/catperfil.model';
import { Catsolidioma } from '../../../../model/catsolidioma.model';
import { Catconsolicitado } from '../../../../model/catconsolicitado.model';
import { SlpSolPercepciones } from '../../../../model/catsolpercepcion.model';
import { Catequiposol } from '../../../../model/catequiposol.model';
import { Cathabsol } from '../../../../model/cathabsol.model';
import { Catfunciones } from '../../../../model/catfunciones.model';
import { CompHabilidadesService } from '../../../../service/cat.comphabilidades.service';
import { PrePercepcionService } from '../../../../service/cat.prepercepcion.service';
import { EquipoService } from '../../../../service/cat.equipo.service';
import { PerfilService } from '../../../../service/cat.perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from '../../../../service/cat.solicitud.service';
import { CatSeguimientoSol } from 'src/app/model/catsegimientosolicitud.model';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';

@Component({
  selector: 'app-visuasol',
  templateUrl: './visuasol.component.html',
  styles: []
})
export class VisuaSolComponent implements OnInit {

  editForm: FormGroup;
  solicitud: Catsolicitud;
  segSolicitud: CatSeguimientoSol;

    // info para los select :P
    allAreas: Catarea[];
    allPrioridad: Catprioridad[];
    allVacantes: CatTipoVacante[];
    allConocimiento: Catcontecnicos[];
    allIdiomas: Catidioma[];
    allClientes: Catcliente[];
    allJornada: Catjornadalab[];
    allHabilidades: Catcomphabilidades[];
    allPercepciones: Catprepercepcion[];
    allEquipo: Catequipo[];
    allPerfiles: Catperfil[];
    area: Catarea;
    seguimiento: CatSeguimientoSol;

    // agregar
    idiomaSol: Catsolidioma;
    conoSol: Catconsolicitado;
    percepcionsol: SlpSolPercepciones;
    equipoSol: Catequiposol;
    habSol: Cathabsol;
    idioma: Catidioma;
    habilidad: Catcomphabilidades;
    nvIdioma: string;
    nvCono: string;
    conocimiento: Catcontecnicos;
    nvhab: string;
    index: number;
    equipo: Catequipo;
    funcion: Catfunciones;
    descripcionF: string;
    valorPer: number;
    percepcion: Catprepercepcion;
    descripcionPer: string;
    cliente: Catcliente;

  constructor(private areaService: AreaService,
    private prioridadService: PrioridadService,
    private tipoVacanteService: TipoVacanteService,
    private idiomaService: IdiomaService,
    private clienteService: ClienteService,
    private jornadaService: JornadaLAbService,
    private conocimientoService: ConTecnicosService,
    private habilidadService: CompHabilidadesService,
    private percepcionService: PrePercepcionService,
    private equipoService: EquipoService,
    private perfilService: PerfilService,
    private route: ActivatedRoute,
    private router: Router,
    private bs: SeguimientoSolService,
    private fb: FormBuilder) {

     }
  ngOnInit() {
    this.areaService.getAreas().subscribe((data: Catarea[]) => this.allAreas = data);
    this.prioridadService.getPrioridades().subscribe((data: Catprioridad[]) => this.allPrioridad = data);
    this.tipoVacanteService.getTipoVacantes().subscribe((data: CatTipoVacante[]) => this.allVacantes = data);
    this.idiomaService.getIdiomas().subscribe((data: Catidioma[]) => this.allIdiomas = data);
    this.clienteService.getClientes().subscribe((data: Catcliente[]) => this.allClientes = data);
    this.jornadaService.getJornadas().subscribe((data: Catjornadalab[]) => this.allJornada = data);
    this.conocimientoService.getContecnicos().subscribe((data: Catcontecnicos[]) => this.allConocimiento = data);
    this.habilidadService.getCompHabilidades().subscribe((data: Catcomphabilidades[]) => this.allHabilidades = data);
    this.percepcionService.getPercepciones().subscribe((data: Catprepercepcion[]) => this.allPercepciones = data);
    this.equipoService.getEquipos().subscribe((data: Catequipo[]) => this.allEquipo = data);
    this.perfilService.getPerfiles().subscribe((data: Catperfil[]) => this.allPerfiles = data);
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.segSolicitud = res;
        this.area = res.solSolicitud.arnAreanegocio;
        console.log(this.segSolicitud.sgsComentario);
      });
    });
  }

}

