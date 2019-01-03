import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from 'src/app/model/catsegimientosolicitud.model';
import { Subject } from 'rxjs';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { AuthService } from 'src/app/service/auth.service';
import { AreaService } from 'src/app/service/cat.area.service';
import { PrioridadService } from 'src/app/service/cat.prioridad.service';
import { TipoVacanteService } from 'src/app/service/cat.tipvacante.service';
import { IdiomaService } from 'src/app/service/cat.idioma.service';
import { ClienteService } from 'src/app/service/cat.cliente.service';
import { JornadaLAbService } from 'src/app/service/cat.jornadalab.service';
import { ConTecnicosService } from 'src/app/service/cat.contecnicos.service';
import { CompHabilidadesService } from 'src/app/service/cat.comphabilidades.service';
import { PrePercepcionService } from 'src/app/service/cat.prepercepcion.service';
import { EquipoService } from 'src/app/service/cat.equipo.service';
import { PerfilService } from 'src/app/service/cat.perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { Catarea } from 'src/app/model/catarea.model';
import { Catprioridad } from 'src/app/model/catprioridad.model';
import { CatTipoVacante } from 'src/app/model/cattipovacante.model';
import { Catcontecnicos } from 'src/app/model/catcontecnicos.model';
import { Catidioma } from 'src/app/model/catidioma.model';
import { Catcliente } from 'src/app/model/catcliente.model';
import { Catjornadalab } from 'src/app/model/catjornadalab.model';
import { Catcomphabilidades } from 'src/app/model/catcomphabilidades.model';
import { Catprepercepcion } from 'src/app/model/catprepercepcion.model';
import { Catequipo } from 'src/app/model/catequipo.model';
import { Catperfil } from 'src/app/model/catperfil.model';
import { Catsolidioma } from 'src/app/model/catsolidioma.model';
import { Catconsolicitado } from 'src/app/model/catconsolicitado.model';
import { SlpSolPercepciones } from 'src/app/model/catsolpercepcion.model';
import { Catequiposol } from 'src/app/model/catequiposol.model';
import { Cathabsol } from 'src/app/model/cathabsol.model';
import { Catfunciones } from 'src/app/model/catfunciones.model';
import swal from 'sweetalert2';
import { Catusuario } from 'src/app/model/catusuario.model';
import { UsuarioService } from 'src/app/service/cat.usuario.service';

@Component({
  selector: 'app-alta-liderreclutamiento',
  templateUrl: './alta-liderreclutamiento.component.html',
  styles: []
})
export class AltaLiderreclutamientoComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayAreas: CatSeguimientoSol[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private serviceSgsSolicitud: SeguimientoSolService,
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
    private fb: FormBuilder) { }

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
      allUsuario: Catusuario[];
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

      comentario: string;
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
    this.userService.getReclutadores().subscribe((data: Catusuario[]) => this.allUsuario = data);
    this.route.params.subscribe(params => {
      this.service.editBusiness(params['id']).subscribe(res => {
        this.segimiento = res;
        this.solicitud = this.segimiento.solSolicitud;
      });
    });
  }

  updateBusiness() {
    console.log(this.solicitud.usrUsuarioBySolIdreclutador);
    this.route.params.subscribe(params => {
      this.bs.updateBusiness(this.solicitud, this.solicitud.solIdsolicitud);
      this.service.addAsigna(this.segimiento.solSolicitud);
      this.router.navigate(['/IndexLiderreclutamiento']);
       swal({
        position: 'top',
        type: 'success',
        title: `¡¡Solicitud modificada con éxito!!`,
        showConfirmButton: false,
        timer: 1500
      });
    });
    // this.update();
 }

 updateBusinessLider() {
  this.route.params.subscribe(params => {
    this.bs.updateBusiness(this.solicitud, this.solicitud.solIdsolicitud);
    this.service.addAsigna(this.segimiento.solSolicitud);
    this.router.navigate(['/New-candidato']);
  });
}

 update(): void {
  window.location.reload();
 }


}
