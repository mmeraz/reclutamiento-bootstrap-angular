import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from 'src/app/model/catsegimientosolicitud.model';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { AreaService } from 'src/app/service/cat.area.service';
import { Catprepercepcion } from 'src/app/model/catprepercepcion.model';
import { Catfunciones } from 'src/app/model/catfunciones.model';
import { Catequipo } from 'src/app/model/catequipo.model';
import { Catcliente } from 'src/app/model/catcliente.model';
import { Catcontecnicos } from 'src/app/model/catcontecnicos.model';
import { Catcomphabilidades } from 'src/app/model/catcomphabilidades.model';
import { Catequiposol } from 'src/app/model/catequiposol.model';
import { Catconsolicitado } from 'src/app/model/catconsolicitado.model';
import { Catsolidioma } from 'src/app/model/catsolidioma.model';
import { SlpSolPercepciones } from 'src/app/model/catsolpercepcion.model';
import { Catidioma } from 'src/app/model/catidioma.model';
import { Cathabsol } from 'src/app/model/cathabsol.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { Catarea } from 'src/app/model/catarea.model';
import { Catprioridad } from 'src/app/model/catprioridad.model';
import { CatTipoVacante } from 'src/app/model/cattipovacante.model';
import { Catjornadalab } from 'src/app/model/catjornadalab.model';
import { PrioridadService } from 'src/app/service/cat.prioridad.service';
import { TipoVacanteService } from 'src/app/service/cat.tipvacante.service';
import { IdiomaService } from 'src/app/service/cat.idioma.service';
import { ClienteService } from 'src/app/service/cat.cliente.service';
import { JornadaLAbService } from 'src/app/service/cat.jornadalab.service';
import { ConTecnicosService } from 'src/app/service/cat.contecnicos.service';
import { Catperfil } from 'src/app/model/catperfil.model';
import { CompHabilidadesService } from 'src/app/service/cat.comphabilidades.service';
import { PrePercepcionService } from 'src/app/service/cat.prepercepcion.service';
import { EquipoService } from 'src/app/service/cat.equipo.service';
import { PerfilService } from 'src/app/service/cat.perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';
import swal from 'sweetalert2';
import { UsuarioService } from '../../../../service/cat.usuario.service';
import { Catusuario } from '../../../../model/catusuario.model';
import { MailService } from 'src/app/service/mail.service';

@Component({
  selector: 'app-consultar-tivalidacion',
  templateUrl: './consultar-tivalidacion.component.html',
  providers: [AreaService, PrioridadService,
    TipoVacanteService, IdiomaService,
    ClienteService, JornadaLAbService,
    ConTecnicosService]
})
export class ConsultarTivalidacionComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayAreas: CatSeguimientoSol[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor (private serviceSgsSolicitud: SeguimientoSolService,
    protected authservice: AuthService, private areaService: AreaService,
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
    private bs: SolicitudService,
    private service: SeguimientoSolService,
    private userService: UsuarioService,
    private fb: FormBuilder, private serviceEmail: MailService) { }

  editForm: FormGroup;
  solicitud: Catsolicitud;
  segimiento: CatSeguimientoSol;

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
    user: Catusuario;
    comentario: string;
    edadString: string;

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
    this.userService.getUsuario(3).subscribe((data: Catusuario) => this.user = data);
    this.route.params.subscribe(params => {
      this.service.editBusiness(params['id']).subscribe(res => {
        this.segimiento = res;
        this.solicitud = this.segimiento.solSolicitud;
        console.log(this.segimiento.solSolicitud.cliCliente.cliNombre);
        console.log(this.solicitud, this.solicitud.solIdsolicitud);
      });
    });
  }

  updateBusiness() {
    this.route.params.subscribe(params => {
      this.solicitud.usrUsuarioBySolIdreclutador = this.user;
      this.bs.updateBusiness(this.solicitud, this.solicitud.solIdsolicitud);
      this.userService.getUsuario(3).subscribe(result => {
        this.user = result; });
      this.solicitud.usrUsuarioBySolIdreclutador = this.user;
      this.service.addValidar(this.segimiento.solSolicitud, this.comentario);
      this.serviceEmail.sendEmail('2', this.solicitud);
      this.router.navigate(['/IndexTiValidacion']);
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

 updateRechazada() {
  this.route.params.subscribe(params => {
    this.service.addRechazadaTI(this.segimiento.solSolicitud, this.comentario);
    this.serviceEmail.sendEmail('3', this.solicitud);
    this.router.navigate(['/IndexTiValidacion']);
     swal({
      position: 'top',
      type: 'error',
      title: `¡¡Solicitud Rechazada!!`,
      showConfirmButton: false,
      timer: 2000
    });
  });
  this.update();
}

 update(): void {
  window.location.reload();
 }

 addIdioma() {
  this.idiomaSol = {
    id: null,
    solSolicitud: null,
    idiIdioma: this.idioma,
    sliNivel: this.nvIdioma
  };
  this.solicitud.idiomas.push(this.idiomaSol);
  this.idioma = null;
  this.nvIdioma = null;
 }

 deleteIdioma(item: Catsolidioma) {
  this.index = this.solicitud.idiomas.indexOf(item);
  this.solicitud.idiomas.splice(this.index, 1);
  this.index = null;
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
    this.solicitud.conocimientos.push(this.conoSol);
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
    this.solicitud.habilidades.push(this.habSol);
    this.habilidad = null;
    this.nvhab = null;
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
    this.solicitud.equipos.push(this.equipoSol);
    this.equipo = null;
  }

 deleteConocimiento(item: Catconsolicitado) {
   this.index = this.solicitud.conocimientos.indexOf(item);
   this.solicitud.conocimientos.splice(this.index, 1);
   this.index = null;
 }

 deleteHabilidad(item: Cathabsol) {
  this.index = this.solicitud.habilidades.indexOf(item);
  this.solicitud.habilidades.splice(this.index, 1);
  this.index = null;
 }

 deleteEquipo(item: Catequiposol) {
  this.index = this.solicitud.equipos.indexOf(item);
  this.solicitud.equipos.splice(this.index, 1);
  this.index = null;
 }

 deleteFuncion(item: Catfunciones) {
  this.index = this.solicitud.funciones.indexOf(item);
  this.solicitud.funciones.splice(this.index, 1);
  this.index = null;
 }

 deletePercepcion(item: SlpSolPercepciones) {
  this.index = this.solicitud.percepsiones.indexOf(item);
  this.solicitud.percepsiones.splice(this.index, 1);
  this.index = null;
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
    this.solicitud.percepsiones.push(this.percepcionsol);
    this.percepcion = null;
    this.valorPer = null;
    this.descripcionPer = null;
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
    this.solicitud.funciones.push(this.funcion);
    this.descripcionF = null;
  }



}
