import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';


import { CatAreaComponent } from './catalogos/cat-area/cat-area.component';
import { CatCandidatoComponent } from './catalogos/cat-candidato/cat-candidato.component';
import { CatClienteComponent } from './catalogos/cat-cliente/cat-cliente.component';
import { CatComphabilidadesComponent } from './catalogos/cat-comphabilidades/cat-comphabilidades.component';
import { CatContactclienteComponent } from './catalogos/cat-contactcliente/cat-contactcliente.component';
import { CatContecnicosComponent } from './catalogos/cat-contecnicos/cat-contecnicos.component';
import { CatDoccandidatoComponent } from './catalogos/cat-doccandidato/cat-doccandidato.component';
import { CatDocumentosComponent } from './catalogos/cat-documentos/cat-documentos.component';
import { CatEntrevistaComponent } from './catalogos/cat-entrevista/cat-entrevista.component';
import { CatEquipoComponent } from './catalogos/cat-equipo/cat-equipo.component';
import { CatEstacandidatoComponent } from './catalogos/cat-estacandidato/cat-estacandidato.component';
import { CatEstasolicitudComponent } from './catalogos/cat-estasolicitud/cat-estasolicitud.component';
import { CatIdiomaComponent } from './catalogos/cat-idioma/cat-idioma.component';
import { CatJornadalabComponent } from './catalogos/cat-jornadalab/cat-jornadalab.component';
import { CatPerfilComponent } from './catalogos/cat-perfil/cat-perfil.component';
import { CatPrepercepcionComponent } from './catalogos/cat-prepercepcion/cat-prepercepcion.component';
import { CatPrioridadComponent } from './catalogos/cat-prioridad/cat-prioridad.component';
import { CatSeguicandidatoComponent } from './catalogos/cat-seguicandidato/cat-seguicandidato.component';
import { CatSeguisolicitudComponent } from './catalogos/cat-seguisolicitud/cat-seguisolicitud.component';
import { CatSolicitudComponent } from './catalogos/cat-solicitud/cat-solicitud.component';
import { CatTipvacanteComponent } from './catalogos/cat-tipvacante/cat-tipvacante.component';
import { CatUsuarioComponent } from './catalogos/cat-usuario/cat-usuario.component';
import { LoginComponent} from './pages/login/login.component';
import { EditAreaComponent} from './catalogos/cat-area/edit.component';
import { EditPrioridadComponent } from './catalogos/cat-prioridad/edit-prioridad.component';
import { CreateAreaComponent } from './catalogos/cat-area/create-area.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CandidatoComponent } from './pages/candidato/candidato.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { CrearContactoComponent } from './catalogos/cat-contactcliente/crear-contacto.component';
import { EditContactoComponent } from './catalogos/cat-contactcliente/edit-contacto.component';
import { EditClienteComponent } from './catalogos/cat-cliente/edit-cliente.component';
import { EditJornadaComponent } from './catalogos/cat-jornadalab/edit.component';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { EditTipvacanteComponent } from './catalogos/cat-tipvacante/edit-tipvacante.component';
import { CreateTipvacanteComponent } from './catalogos/cat-tipvacante/create-tipvacante.component';
import { EditPerfilComponent } from './catalogos/cat-perfil/edit-perfil.component';
import { EditEquipoComponent } from './catalogos/cat-equipo/edit-equipo.component';
import { EditUsuarioComponent } from './catalogos/cat-usuario/edit-usuario.component';
import { EditPrepercepcionComponent } from './catalogos/cat-prepercepcion/edit-prepercepcion.component';
import { CreatePrepercepcionComponent } from './catalogos/cat-prepercepcion/create-prepercepcion.component';
import { EditEstasolicitudComponent } from './catalogos/cat-estasolicitud/edit-estasolicitud.component';
import { EditContecnicosComponent } from './catalogos/cat-contecnicos/edit-contecnicos.component';
import { ListSolicitudComponent } from './catalogos/cat-solicitud/list-solicitud.component';
import { EditSolicitudComponent } from './catalogos/cat-solicitud/edit-solicitud.component';
import { CreateEstatuscandidatoComponent } from './catalogos/cat-estacandidato/create-estatuscandidato.component';
import { EditEstatuscandidatoComponent } from './catalogos/cat-estacandidato/edit-estatuscandidato.component';
import { EditIdiomaComponent } from './catalogos/cat-idioma/edit-idioma.component';
import { CreateIdiomaComponent } from './catalogos/cat-idioma/create-idioma.component';
import { CreateComphabilidadesComponent } from './catalogos/cat-comphabilidades/create-comphabilidades.component';
import { EditComphabilidadesComponent } from './catalogos/cat-comphabilidades/edit-comphabilidades.component';
import { DetalleSolicitudComponent } from './catalogos/cat-solicitud/detalle-solicitud.component';
import { AceptadosComercialComponent } from './pages/usuarios/comercial/componets/aceptados-comercial.component';
import { IndexComercialComponent } from './pages/usuarios/comercial/index-comercial.component';
import { RechazadosComercialComponent } from './pages/usuarios/comercial/componets/rechazados-comercial.component';
import { BorradorComercialComponent } from './pages/usuarios/comercial/componets/borrador-comercial.component';
import { CandidatospendientesComercialComponent } from './pages/usuarios/comercial/componets/candidatospendientes-comercial.component';
import { RetroespectivasComercialComponent } from './pages/usuarios/comercial/componets/retroespectivas-comercial.component';
import { SolicitudespendientesComercialComponent } from './pages/usuarios/comercial/componets/solicitudespendientes-comercial.component';
import { IndexRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/index-recursoshumanos.component';
import { PendientesRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/componets/pendientes-recursoshumanos.component';
import { PendientescoRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/componets/pendientesco-recursoshumanos.component';
import { ContratadosRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/componets/contratados-recursoshumanos.component';
import { IndexReclutamientoComponent } from './pages/usuarios/reclutamiento/index-reclutamiento.component';
import { PrialtaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/prialta-reclutamiento.component';
import { PrimediaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/primedia-reclutamiento.component';
import { PribajaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/pribaja-reclutamiento.component';
import { CandirechaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/candirecha-reclutamiento.component';
import { CandivaliReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/candivali-reclutamiento.component';
import { Solicitud2ReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/solicitud2-reclutamiento.component';
import { IndexBackofficeComponent } from './pages/usuarios/backoffice/index-backoffice.component';
import { RequeriBackofficeComponent } from './pages/usuarios/backoffice/componets/requeri-backoffice.component';
import { CandiBackofficeComponent } from './pages/usuarios/backoffice/componets/candi-backoffice.component';
import { RequipeBackofficeComponent } from './pages/usuarios/backoffice/componets/requipe-backoffice.component';
import { IndexLiderreclutamientoComponent } from './pages/usuarios/liderreclutamiento/index-liderreclutamiento.component';
import { PrialLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/prial-liderreclu.component';
import { PrimeLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/prime-liderreclu.component';
import { PribaLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/priba-liderreclu.component';
import { AsignaLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/asigna-liderreclu.component';
import { ValidadasLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/validadas-liderreclu.component';
import { IndexTivalidacionComponent } from './pages/usuarios/tivalidacion/index-tivalidacion.component';
import { SolipenTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/solipen-tivalidacion.component';
import { CandivaliTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/candivali-tivalidacion.component';
import { SolivaliTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/solivali-tivalidacion.component';
import { OpcicandiTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/opcicandi-tivalidacion.component';
import { CandivaTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/candiva-tivalidacion.component';
import { TablasolTivalidacionComponent } from './pages/usuarios/tivalidacion/solicitudvalidar/tablasol-tivalidacion.component';
import { ConsultarTivalidacionComponent } from './pages/usuarios/tivalidacion/consultar/consultar-tivalidacion.component';
import { AltaLiderreclutamientoComponent } from './pages/usuarios/liderreclutamiento/alta/alta-liderreclutamiento.component';
import { CitaclienteBackofficeComponent } from './pages/usuarios/backoffice/citacliente/citacliente-backoffice.component';
import { SeguimientoVtiComponent } from './catalogos/cat-seguisolicitud/seguimiento-vti.component';
import { EditCandidatoComponent } from './catalogos/cat-candidato/edit-candidato.component';
import { CandidatoValidarTiComponent } from './pages/usuarios/tivalidacion/candidatovalidar/candidato-validar-ti.component';
import { SoliReclutamientoComponent } from './pages/usuarios/reclutamiento/soli-reclutamiento/soli-reclutamiento.component';
import { CanrechaliderComponent } from './pages/usuarios/liderreclutamiento/componets/canrechalider.component';
import { CandiacepliderComponent } from './pages/usuarios/liderreclutamiento/componets/candiaceplider.component';
import { CandiaceprecluComponent } from './pages/usuarios/reclutamiento/componets/candiacepreclu.component';
import { RechaclienComponent } from './pages/usuarios/reclutamiento/componets/rechaclien.component';
import { Solicitu2liderComponent } from './pages/usuarios/liderreclutamiento/componets/solicitu2lider.component';
<<<<<<< HEAD
import { IndexRetroComponent } from './pages/usuarios/comercial/retroexpectiva/index-retro.component';
import { IndexRetroComComponent } from './pages/usuarios/comercial/retroexpeccompara/index-retro-com.component';
=======
import { AppComponent } from './app.component';

>>>>>>> 95dbf507c7742c57a60fa282deb6826d7c962a6d





 const appRoutes: Routes = [

  {path: 'Edit-candidato/:id', component: EditCandidatoComponent },

  {path: '', component: AppComponent, canActivate: [AuthGuard] },
  {path: 'Home', component: HomeComponent, canActivate: [AuthGuard]  },
  {path: 'login', component: LoginComponent},
  {path: 'Area', component: CatAreaComponent, canActivate: [AuthGuard] },
  {path: 'Create-area', component: CreateAreaComponent, canActivate: [AuthGuard]  },
  {path: 'Edit/:id', component: EditAreaComponent, canActivate: [AuthGuard] },
  {path: 'EditPerfil/:id', component: EditPerfilComponent, canActivate: [AuthGuard] },
  {path: 'EditEquipo/:id', component: EditEquipoComponent, canActivate: [AuthGuard] },
  {path: 'EditUser/:id', component: EditUsuarioComponent, canActivate: [AuthGuard] },
  {path: 'EditEquipo/:id', component: EditEquipoComponent, canActivate: [AuthGuard] },
  {path: 'Edit-tipvacante/:id', component: EditTipvacanteComponent, canActivate: [AuthGuard] },
  {path: 'Edit-prepercepcion/:id', component: EditPrepercepcionComponent, canActivate: [AuthGuard] },
  {path: 'Candidato', component: CatCandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Cliente', component: CatClienteComponent, canActivate: [AuthGuard] },

  {path: 'Habilidades', component: CatComphabilidadesComponent, canActivate: [AuthGuard] },
  {path: 'Create-habilidades', component: CreateComphabilidadesComponent , canActivate: [AuthGuard] },
  {path: 'Edit-habilidades/:id', component: EditComphabilidadesComponent, canActivate: [AuthGuard]  },

  {path: 'Contacto-cliente', component: CatContactclienteComponent, canActivate: [AuthGuard]  },
  {path: 'Conocimientos-tecnicos', component: CatContecnicosComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-estasolicitud/:id', component: EditEstasolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Documento-candidatos', component: CatDoccandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Documentos', component: CatDocumentosComponent , canActivate: [AuthGuard] },
  {path: 'Entrevista', component: CatEntrevistaComponent, canActivate: [AuthGuard]  },
  {path: 'Equipo', component: CatEquipoComponent, canActivate: [AuthGuard]  },

  {path: 'Estatus-candidato', component: CatEstacandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Create-estacand', component: CreateEstatuscandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-estacand/:id', component: EditEstatuscandidatoComponent, canActivate: [AuthGuard]  },

  {path: 'Estatus-solicitud', component: CatEstasolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-estasolicitud/:id', component: EditEstasolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Create-estasolicitud', component: CreateEstatuscandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Solicitudvti/:id', component: SeguimientoVtiComponent, canActivate: [AuthGuard] },
  {path: 'Seguimiento-Sol', component: SolicitudComponent, canActivate: [AuthGuard]},
  {path: 'Idioma', component: CatIdiomaComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-idioma/:id', component: EditIdiomaComponent, canActivate: [AuthGuard]  },
  {path: 'Create-idioma', component: CreateIdiomaComponent, canActivate: [AuthGuard]  },

  {path: 'Jornada-laboral', component: CatJornadalabComponent, canActivate: [AuthGuard]  },
  {path: 'Perfil', component: CatPerfilComponent, canActivate: [AuthGuard]  },
  {path: 'Pre-percepcion', component: CatPrepercepcionComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-prepercepcion/:id', component: EditPrepercepcionComponent, canActivate: [AuthGuard]  },
  {path: 'Create-prepercepcion', component: CreatePrepercepcionComponent, canActivate: [AuthGuard]  },
  {path: 'Prioridad', component: CatPrioridadComponent, canActivate: [AuthGuard]  },
  {path: 'Seguimiento-candidato', component: CatSeguicandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Seguimiento-solicitud', component: CatSeguisolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Create-solicitud', component: CatSolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Tipo-vacante', component: CatTipvacanteComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-tipvacante/:id', component: EditTipvacanteComponent , canActivate: [AuthGuard] },
  {path: 'Create-tipvac', component: CreateTipvacanteComponent, canActivate: [AuthGuard]  },
  {path: 'Usuarios', component: CatUsuarioComponent, canActivate: [AuthGuard]  },
  {path: 'New-candidato', component: CandidatoComponent, canActivate: [AuthGuard] },
  {path: 'AddContacto/:id', component: CrearContactoComponent, canActivate: [AuthGuard] },
  {path: 'EditContacto/:id', component: EditContactoComponent, canActivate: [AuthGuard] },
  {path: 'EditCliente/:id', component: EditClienteComponent, canActivate: [AuthGuard] },
  {path: 'EditPrioridad/:id', component: EditPrioridadComponent, canActivate: [AuthGuard] },
  {path: 'EditJornada/:id', component: EditJornadaComponent, canActivate: [AuthGuard] },
  {path: 'EditSolicitud/:id', component: EditSolicitudComponent, canActivate: [AuthGuard] },
  {path: 'Solicitud', component: ListSolicitudComponent, canActivate: [AuthGuard] },
  {path: 'SolicitudDetalle/:id', component: DetalleSolicitudComponent, canActivate: [AuthGuard] },
  {path: 'Edit-contecnicos/:id', component: EditContecnicosComponent, canActivate: [AuthGuard]  },
  // {path: '**', component: NotfoundComponent, canActivate: [AuthGuard] },
  {path: 'AceptadosComercial', component: AceptadosComercialComponent, canActivate: [AuthGuard]  },
  {path: 'IndexComercial', component: IndexComercialComponent, canActivate: [AuthGuard]  },
  {path: 'RechazadosComercial', component: RechazadosComercialComponent, canActivate: [AuthGuard]  },
  {path: 'BorradorComercial', component: BorradorComercialComponent, canActivate: [AuthGuard]  },
  {path: 'CandidatospendienteComercial', component: CandidatospendientesComercialComponent, canActivate: [AuthGuard]  },
  {path: 'RetroespectivasComercial', component: RetroespectivasComercialComponent, canActivate: [AuthGuard]  },
  {path: 'SolicitudespendientesComercial', component: SolicitudespendientesComercialComponent, canActivate: [AuthGuard]  },
  {path: 'IndexRecursosHumanos', component: IndexRecursoshumanosComponent, canActivate: [AuthGuard]  },
  {path: 'PendientesdocumentacionRecursoshumanos', component: PendientesRecursoshumanosComponent, canActivate: [AuthGuard]  },
  {path: 'PendientescontratacionRecursoshumanos', component: PendientescoRecursoshumanosComponent, canActivate: [AuthGuard]  },
  {path: 'ContratadosRecursoshumanos', component: ContratadosRecursoshumanosComponent, canActivate: [AuthGuard]  },
  {path: 'IndexReclutamiento', component: IndexReclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'PrioridadAltaReclutamiento', component: PrialtaReclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'PrioridadMediaReclutamiento', component: PrimediaReclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'PrioridadBajaReclutamiento', component: PribajaReclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'CandidatoRechazadoReclutamiento', component: CandirechaReclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'CandidatoValidadoReclutamiento', component: CandivaliReclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'Solicitud2OpcionReclutamiento', component: Solicitud2ReclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'IndexBackoffice', component: IndexBackofficeComponent, canActivate: [AuthGuard]  },
  {path: 'RequerimientosBackoffice', component: RequeriBackofficeComponent, canActivate: [AuthGuard]  },
  {path: 'CandidatosBackoffice', component: CandiBackofficeComponent, canActivate: [AuthGuard]  },
  {path: 'RequerimientosPerdidosBackoffice', component: RequipeBackofficeComponent, canActivate: [AuthGuard]  },
  {path: 'IndexLiderreclutamiento', component: IndexLiderreclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'PrioridadAltaLiderreclutamiento', component: PrialLiderrecluComponent, canActivate: [AuthGuard]  },
  {path: 'PrioridadMediaLiderreclutamiento', component: PrimeLiderrecluComponent, canActivate: [AuthGuard]  },
  {path: 'PrioridadBajaLiderreclutamiento', component: PribaLiderrecluComponent, canActivate: [AuthGuard]  },
  {path: 'AsignadasLiderreclutamiento', component: AsignaLiderrecluComponent, canActivate: [AuthGuard]  },
  {path: 'ValidadasLiderreclutamiento', component: ValidadasLiderrecluComponent, canActivate: [AuthGuard]  },
  {path: 'IndexTiValidacion', component: IndexTivalidacionComponent, canActivate: [AuthGuard]  },
  {path: 'SolicitudesPendientesDeValidacion', component: SolipenTivalidacionComponent, canActivate: [AuthGuard]  },
  {path: 'CandidatosPorValidar', component: CandivaliTivalidacionComponent, canActivate: [AuthGuard]  },
  {path: 'OpcionesDeCandidatos', component: OpcicandiTivalidacionComponent, canActivate: [AuthGuard]  },
  {path: 'SolicitudesValidadas', component: SolivaliTivalidacionComponent, canActivate: [AuthGuard]  },
  {path: 'CandidatosValidados', component: CandivaTivalidacionComponent, canActivate: [AuthGuard]  },
  {path: 'TablaSolicitudPorValidarTiValidacion', component: TablasolTivalidacionComponent, canActivate: [AuthGuard]  },
  {path: 'ConsultarTiValidacion/:id', component: ConsultarTivalidacionComponent, canActivate: [AuthGuard]  },
  {path: 'AltaLiderReclutamiento', component: AltaLiderreclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'CandidatoValidarTi/:id', component: CandidatoValidarTiComponent, canActivate: [AuthGuard]  },
  {path: 'AltaLiderReclutamiento/:id', component: AltaLiderreclutamientoComponent, canActivate: [AuthGuard]  },
  {path: 'CitaClienteBackoffice/:id', component: CitaclienteBackofficeComponent, canActivate: [AuthGuard]},
  {path: 'Solicitud-reclutamiento/:id', component: SoliReclutamientoComponent, canActivate: [AuthGuard]},
  {path: 'CandidatoRechazadoLider', component: CanrechaliderComponent, canActivate: [AuthGuard]},
  {path: 'CandidatoAceptadoLider', component: CandiacepliderComponent, canActivate: [AuthGuard]},
  {path: 'CandidatosRechazadosClienteReclutamiento', component: RechaclienComponent, canActivate: [AuthGuard]},
  {path: 'CandidatosAceptadosClienteReclutamiento', component: CandiaceprecluComponent, canActivate: [AuthGuard]},
  {path: 'Solicitud2OpcionLider', component: Solicitu2liderComponent, canActivate: [AuthGuard]},
  {path: 'IndexRetroexpectiva', component: IndexRetroComponent, canActivate: [AuthGuard]  },
  {path: 'IndexRetroexpectivaComparacion', component: IndexRetroComComponent, canActivate: [AuthGuard]  },
];

 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
