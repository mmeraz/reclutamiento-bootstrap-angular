import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/service/cat.area.service';
import { Catarea } from 'src/app/model/catarea.model';
import { PrioridadService } from 'src/app/service/cat.prioridad.service';
import { Catprioridad } from 'src/app/model/catprioridad.model';
import { TipoVacanteService } from 'src/app/service/cat.tipvacante.service';
import { CatTipvacanteComponent } from '../cat-tipvacante/cat-tipvacante.component';
import { CatTipoVacante } from 'src/app/model/cattipovacante.model';
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
import { Catconsolicitado } from 'src/app/model/catconsolicitado.model';
import { Cathabsol } from 'src/app/model/cathabsol.model';
import { EquipoService } from 'src/app/service/cat.equipo.service';
import { Catequipo } from 'src/app/model/catequipo.model';
import { Catfunciones } from 'src/app/model/catfunciones.model';
import { Catproyecto } from 'src/app/model/catproyecto.model';
import { SlpSolPercepciones } from 'src/app/model/catsolpercepcion.model';
import { Catperfil } from 'src/app/model/catperfil.model';
import { PerfilService } from 'src/app/service/cat.perfil.service';
import { Catequiposol } from 'src/app/model/catequiposol.model';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';



@Component({
  selector: 'app-cat-solicitud',
  templateUrl: './cat-solicitud.component.html',
  providers: [AreaService, PrioridadService,
    TipoVacanteService, IdiomaService,
    ClienteService, JornadaLAbService,
    ConTecnicosService, ]
})
export class CatSolicitudComponent implements OnInit {
  // a mandar el back
  solicitud: Catsolicitud;

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

  // propiedades para capturar la info de la pagina de solicitud
  proyecto: Catproyecto;
  nombrePro: string;
  puestoPro: string;
  duracionPro: string;
  jornadaLab: Catjornadalab;
  descripcion: string;
  presupuesto: string;
  prioridad: Catprioridad = null;
  requerimiento: Catarea = null;
  vacante: CatTipoVacante = null;
  cliente: Catcliente = null;
  habilidad: Catcomphabilidades;
  conocimiento: Catcontecnicos;
  idioma: Catidioma;
  contactoCliente: Catcontactcliente = null;
  percepcion: Catprepercepcion = null;
  idiomaSol: Catsolidioma;
  nvIdioma: string;
  nvCono: string;
  nvhab: string;
  descripcionF: string;
  descripcionPer: string;
  conoSol: Catconsolicitado;
  valorPer: number;
  habSol: Cathabsol;
  funcion: Catfunciones;
  percepcionsol: SlpSolPercepciones;
  perfil: Catperfil = null;
  nVacante: number;
  tarifaC: number;
  genero: string;
  escolaridad: string;
  equipo: Catequipo;
  equipoSol: Catequiposol;
  edad: number;
  direccion: string;
  experiencia: string;

  // lista de la solicitud (relaciones)
  contactosCliente: Catcontactcliente[] = [];
  listaIdioma: Catsolidioma[] = [];
  listaConocimiento: Catconsolicitado[] = [];
  listaHabilidades: Cathabsol[] = [];
  listaFunciones: Catfunciones[] = [];
  listaPercepciones: SlpSolPercepciones[] = [];
  listaEquipo: Catequiposol[] = [];

  /**
   * Constructor de la clase
   */
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
    private fb: FormBuilder, private bs: SolicitudService) {
    }

    /**
     * Inicializacio de la clase
     */
  ngOnInit() {
    this.areaService.getAreas().subscribe((data: Catarea[]) => this.allAreas = data);
    this.prioridadService.getPrioridades().subscribe((data: Catprioridad[]) => this.allPrioridad = data);
    this.tipoVacanteService.getTipoVacantes().subscribe((data: CatTipoVacante[]) => this.allVacantes = data);
    this.idiomaService.getIdiomass().subscribe((data: Catidioma[]) => this.allIdiomas = data);
    this.clienteService.getClientes().subscribe((data: Catcliente[]) => this.allClientes = data);
    this.jornadaService.getJornadas().subscribe((data: Catjornadalab[]) => this.allJornada = data);
    this.conocimientoService.getContecnicos().subscribe((data: Catcontecnicos[]) => this.allConocimiento = data);
    this.habilidadService.getcomphabilidadess().subscribe((data: Catcomphabilidades[]) => this.allHabilidades = data);
    this.percepcionService.getPercepciones().subscribe((data: Catprepercepcion[]) => this.allPercepciones = data);
    this.equipoService.getEquipos().subscribe((data: Catequipo[]) => this.allEquipo = data);
    this.perfilService.getPerfiles().subscribe((data: Catperfil[]) => this.allPerfiles = data);
  }

  /**
   * Metodo para agregar la solicitud
   */
  addSolicitud() {
    console.log('TODO terminar metodos');
    this.solicitud = {
      solIdsolicitud: null,
      arnAreanegocio: this.requerimiento,
      cliCliente: this.cliente,
      jolJornadalaboral: this.jornadaLab,
      perPerfil: this.perfil,
      priPrioridad: this.prioridad,
      proProyecto: {
        proIdproyecto: null,
        clcContactoClienteByProIdconclitode: this.contactosCliente[0],
        clcContactoClienteByProIdconclilid: this.contactosCliente[1],
        clcContactoClienteByProIdconcligerente: this.contactosCliente[2],
        cliCliente: this.cliente,
        proNombre: this.nombrePro,
        proDescripcion: this.descripcion,
        proPuestoarea: this.puestoPro,
        proInicio: null,
        proObservaciones: null,
        proDuracionmeses: this.duracionPro
      },
      tvaTipoVacante: this.vacante,
      usrUsuarioBySolIdreclutador: {
        usrUsuario: 1,
        usrUsername: 'Alta',
        usrNombreusuario: 'test',
        usrPassword: 'test',
        usrEmail: 'test@test.com',
        usrPerfil: 'A',
        usrTelefono: '123456789'
      },
      usrUsuarioBySolIdcomercial: {
        usrUsuario : 6,
        usrUsername: null,
        usrNombreusuario: null,
        usrPassword: null,
        usrEmail: null,
        usrPerfil: null,
        usrTelefono: null,
      },
      solFolio: null,
      solExistepresupuesto: this.presupuesto,
      solNovacantes: this.nVacante,
      solTarifacomercial: this.tarifaC,
      solGenero: this.genero,
      solEscolaridad: this.escolaridad,
      solEdadincial: null,
      solEdadfinal: this.edad,
      cndCalle: this.direccion,
      solNumextent: null,
      solNumintent: null,
      solCodpostalent: null,
      solMunicipioent: null,
      solEstadoent: null,
      solLugarasignacion: null,
      solExperienciainicial: this.experiencia,
      funciones: this.listaFunciones,
      equipos: this.listaEquipo,
      conocimientos: this.listaConocimiento,
      idiomas: this.listaIdioma,
      habilidades: this.listaHabilidades,
      percepsiones: this.listaPercepciones
    };
    this.bs.addSolicitud(this.solicitud);
  }

  /**
   * Metodo para agregar el idioma a la solicitud;
   */
  addIdioma() {
    this.idiomaSol = {
      id: null,
      solSolicitud: null,
      idiIdioma: this.idioma,
      sliNivel: this.nvIdioma
    };
    this.listaIdioma.push(this.idiomaSol);
    this.idioma = null;
    this.nvIdioma = null;
  }

  /**
   * Metodo para agregar el contactoa la solicitud;
   */
  addContacto() {
    this.contactosCliente.push(this.contactoCliente);
    this.contactoCliente = null;
  }

  /**
   * Metodo para agregar conocimiento a la solicitud;
   */
  addConocimiento() {
    this.conoSol = {
      id: null,
      cotConocimientosTec: this.conocimiento,
      solSolicitud: null,
      socNivel: this.nvCono
    };
    this.listaConocimiento.push(this.conoSol);
    this.conocimiento = null;
    this.nvCono = null;
  }

  /**
   * Metodo para agregar habilidad a la solicitud;
   */
  addHabilidad() {
    this.habSol = {
      cohCompetenciashabilidades: this.habilidad,
      solSolicitud: null,
      hbsNivel: this.nvhab
    };
    this.listaHabilidades.push(this.habSol);
    this.habilidad = null;
    this.nvhab = null;
  }

  /**
   * Metodo para agregar funciones a la solicitud;
   */
  addFunciones() {
    this.funcion = {
      funIdfunciones: null,
      solSolicitud: null,
      funDescripcion: this.descripcionF
    };
    this.listaFunciones.push(this.funcion);
    this.descripcionF = null;
  }


  /**
   * Metodo para agregar percepcion a la solicitud;
   */
  addPercepcion() {
    this.percepcionsol = {
      slpIdpercepciones: null,
      prePercepciones: this.percepcion,
      solSolicitud: null,
      slpValorm: this.valorPer,
      slpDescripcion: this.descripcionPer
    };
    this.listaPercepciones.push(this.percepcionsol);
    this.percepcion = null;
    this.valorPer = null;
    this.descripcionPer = null;
  }

  /**
   * Metodo para agregar el equipo a la solicitud
   */
  addEquipo() {
    this.equipoSol = {
      eslIdequiposol: null,
      equEquipo: this.equipo,
      solSolicitud: null
    };
    this.listaEquipo.push(this.equipoSol);
    this.equipo = null;
  }
}
