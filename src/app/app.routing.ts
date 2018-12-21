import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';


import { CatAreaComponent } from './catalogos/cat-area/cat-area.component';
import { CatCandidatoComponent } from './catalogos/cat-candidato/cat-candidato.component';
import { CatClienteComponent } from './catalogos/cat-cliente/cat-cliente.component';
import { CatCompcandidatoComponent } from './catalogos/cat-compcandidato/cat-compcandidato.component';
import { CatComphabilidadesComponent } from './catalogos/cat-comphabilidades/cat-comphabilidades.component';
import { CatConsolicitadoComponent } from './catalogos/cat-consolicitado/cat-consolicitado.component';
import { CatContactclienteComponent } from './catalogos/cat-contactcliente/cat-contactcliente.component';
import { CatContactoComponent } from './catalogos/cat-contacto/cat-contacto.component';
import { CatConteccandidatoComponent } from './catalogos/cat-conteccandidato/cat-conteccandidato.component';
import { CatContecnicosComponent } from './catalogos/cat-contecnicos/cat-contecnicos.component';
import { CatDoccandidatoComponent } from './catalogos/cat-doccandidato/cat-doccandidato.component';
import { CatDocumentosComponent } from './catalogos/cat-documentos/cat-documentos.component';
import { CatEntrevistaComponent } from './catalogos/cat-entrevista/cat-entrevista.component';
import { CatEquipoComponent } from './catalogos/cat-equipo/cat-equipo.component';
import { CatEquipsolComponent } from './catalogos/cat-equipsol/cat-equipsol.component';
import { CatEstacandidatoComponent } from './catalogos/cat-estacandidato/cat-estacandidato.component';
import { CatEstasolicitudComponent } from './catalogos/cat-estasolicitud/cat-estasolicitud.component';
import { CatFuncionesComponent } from './catalogos/cat-funciones/cat-funciones.component';
import { CatHabsolicitudComponent } from './catalogos/cat-habsolicitud/cat-habsolicitud.component';
import { CatIdiomaComponent } from './catalogos/cat-idioma/cat-idioma.component';
import { CatIdiomacandidatoComponent } from './catalogos/cat-idiomacandidato/cat-idiomacandidato.component';
import { CatJornadalabComponent } from './catalogos/cat-jornadalab/cat-jornadalab.component';
import { CatPercepcioncndaComponent } from './catalogos/cat-percepcioncnda/cat-percepcioncnda.component';
import { CatPercepcioncndofrComponent } from './catalogos/cat-percepcioncndofr/cat-percepcioncndofr.component';
import { CatPerfilComponent } from './catalogos/cat-perfil/cat-perfil.component';
import { CatPrepercepcionComponent } from './catalogos/cat-prepercepcion/cat-prepercepcion.component';
import { CatPrioridadComponent } from './catalogos/cat-prioridad/cat-prioridad.component';
import { CatProyectoComponent } from './catalogos/cat-proyecto/cat-proyecto.component';
import { CatSeguicandidatoComponent } from './catalogos/cat-seguicandidato/cat-seguicandidato.component';
import { CatSeguisolicitudComponent } from './catalogos/cat-seguisolicitud/cat-seguisolicitud.component';
import { CatSolicitudComponent } from './catalogos/cat-solicitud/cat-solicitud.component';
import { CatSolidiomaComponent } from './catalogos/cat-solidioma/cat-solidioma.component';
import { CatSolpercepcionesComponent } from './catalogos/cat-solpercepciones/cat-solpercepciones.component';
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
import { EditCandidatoComponent } from './catalogos/cat-candidato/edit-candidato.component';
import { SolicValidadasTiComponent } from './pages/usuarios/ti/components/solic-validadas-ti.component';
import { CandiValidadosTiComponent } from './pages/usuarios/ti/components/candi-validados-ti.component';
import { IndexTiComponent } from './pages/usuarios/ti/index-ti.component';
import { IndexComercialComponent } from './pages/usuarios/comercial/index-comercial.component';
import { AceptadosComercialComponent } from './pages/usuarios/comercial/componets/aceptados-comercial.component';
import { BorradorComercialComponent } from './pages/usuarios/comercial/componets/borrador-comercial.component';
import { CandidatospendientesComercialComponent } from './pages/usuarios/comercial/componets/candidatospendientes-comercial.component';
import { RechazadosComercialComponent } from './pages/usuarios/comercial/componets/rechazados-comercial.component';
import { RetroespectivasComercialComponent } from './pages/usuarios/comercial/componets/retroespectivas-comercial.component';
import { SolicitudespendientesComercialComponent } from './pages/usuarios/comercial/componets/solicitudespendientes-comercial.component';
import { IndexReclutamientoComponent } from './pages/usuarios/reclutamiento/index-reclutamiento.component';
import { CandirechaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/candirecha-reclutamiento.component';
import { CandivaliReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/candivali-reclutamiento.component';
import { PrialtaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/prialta-reclutamiento.component';
import { PribajaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/pribaja-reclutamiento.component';
import { PrimediaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/primedia-reclutamiento.component';
import { RechacliReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/rechacli-reclutamiento.component';
import { Solicitud2ReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/solicitud2-reclutamiento.component';
import { IndexRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/index-recursoshumanos.component';
import { ContratadosRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/componets/contratados-recursoshumanos.component';
import { PendientesRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/componets/pendientes-recursoshumanos.component';
import { PendientescoRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/componets/pendientesco-recursoshumanos.component';
import { IndexLiderreclutamientoComponent } from './pages/usuarios/liderreclutamiento/index-liderreclutamiento.component';
import { PrialLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/prial-liderreclu.component';
import { PrimeLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/prime-liderreclu.component';
import { PribaLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/priba-liderreclu.component';
import { ValidadasLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/validadas-liderreclu.component';
import { AsignaLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/asigna-liderreclu.component';
import { CandRechaLiderreclutamientoComponent } from'./pages/usuarios/liderreclutamiento/componets/cand-recha-liderreclutamiento.component';
import { CandAceptadosLiderreclutamientoComponent } from'./pages/usuarios/liderreclutamiento/componets/cand-aceptados-liderreclutamiento.component';





 const appRoutes: Routes = [

  // {path: '/', component: HomeComponent },
  {path: 'Home', component: HomeComponent },
  {path: 'Login', component: LoginComponent},
  {path: 'Area', component: CatAreaComponent},
  {path: 'Create-area', component: CreateAreaComponent, },
  {path: 'Edit/:id', component: EditAreaComponent},
  {path: 'EditPerfil/:id', component: EditPerfilComponent},
  {path: 'EditEquipo/:id', component: EditEquipoComponent},
  {path: 'EditUser/:id', component: EditUsuarioComponent},
  {path: 'EditPerfil/:id', component: EditPerfilComponent},
  {path: 'EditEquipo/:id', component: EditEquipoComponent},
  {path: 'EditUser/:id', component: EditUsuarioComponent},
  {path: 'Edit-tipvacante/:id', component: EditTipvacanteComponent},
  {path: 'Edit-prepercepcion/:id', component: EditPrepercepcionComponent},
  {path: 'Candidato', component: CatCandidatoComponent },
  {path: 'Edit-candidato/:id', component: EditCandidatoComponent },

  {path: 'Cliente', component: CatClienteComponent },
  {path: 'Competencia-candidato', component: CatCompcandidatoComponent },
  {path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // {path: 'Home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'Area', component: CatAreaComponent, canActivate: [AuthGuard] },
  {path: 'Create-area', component: CreateAreaComponent, canActivate: [AuthGuard]  },
  {path: 'Edit/:id', component: EditAreaComponent, canActivate: [AuthGuard] },
  {path: 'EditPerfil/:id', component: EditPerfilComponent, canActivate: [AuthGuard] },
  {path: 'EditEquipo/:id', component: EditEquipoComponent, canActivate: [AuthGuard] },
  {path: 'EditUser/:id', component: EditUsuarioComponent, canActivate: [AuthGuard] },
  {path: 'EditPerfil/:id', component: EditPerfilComponent, canActivate: [AuthGuard] },
  {path: 'EditEquipo/:id', component: EditEquipoComponent, canActivate: [AuthGuard] },
  {path: 'EditUser/:id', component: EditUsuarioComponent, canActivate: [AuthGuard] },
  {path: 'Edit-tipvacante/:id', component: EditTipvacanteComponent, canActivate: [AuthGuard] },
  {path: 'Edit-prepercepcion/:id', component: EditPrepercepcionComponent, canActivate: [AuthGuard] },
  {path: 'Candidato', component: CatCandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Cliente', component: CatClienteComponent, canActivate: [AuthGuard] },
  {path: 'Competencia-candidato', component: CatCompcandidatoComponent, canActivate: [AuthGuard]  },

  {path: 'Habilidades', component: CatComphabilidadesComponent, canActivate: [AuthGuard] },
  {path: 'Create-habilidades', component: CreateComphabilidadesComponent , canActivate: [AuthGuard] },
  {path: 'Edit-habilidades/:id', component: EditComphabilidadesComponent, canActivate: [AuthGuard]  },

  {path: 'Conocimiento-solicitado', component: CatConsolicitadoComponent, canActivate: [AuthGuard]  },
  {path: 'Contacto-cliente', component: CatContactclienteComponent, canActivate: [AuthGuard]  },
  {path: 'Contacto', component: CatContactoComponent, canActivate: [AuthGuard]  },
  {path: 'Conocimiento-tecnico-candidato', component: CatConteccandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Conocimientos-tecnicos', component: CatContecnicosComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-estasolicitud/:id', component: EditEstasolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Documento-candidatos', component: CatDoccandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Documentos', component: CatDocumentosComponent , canActivate: [AuthGuard] },
  {path: 'Entrevista', component: CatEntrevistaComponent, canActivate: [AuthGuard]  },
  {path: 'Equipo', component: CatEquipoComponent, canActivate: [AuthGuard]  },
  {path: 'Equipo-solicitud', component: CatEquipsolComponent, canActivate: [AuthGuard]  },

  {path: 'Estatus-candidato', component: CatEstacandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Create-estacand', component: CreateEstatuscandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-estacand/:id', component: EditEstatuscandidatoComponent, canActivate: [AuthGuard]  },

  {path: 'Estatus-solicitud', component: CatEstasolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-estasolicitud/:id', component: EditEstasolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Create-estasolicitud', component: CreateEstatuscandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Funciones', component: CatFuncionesComponent, canActivate: [AuthGuard]  },
  {path: 'Habilidad-solicitada', component: CatHabsolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Seguimiento-Sol', component: SolicitudComponent, canActivate: [AuthGuard]},
  {path: 'Idioma', component: CatIdiomaComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-idioma/:id', component: EditIdiomaComponent, canActivate: [AuthGuard]  },
  {path: 'Create-idioma', component: CreateIdiomaComponent, canActivate: [AuthGuard]  },

  {path: 'Idioma-candidato', component: CatIdiomacandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Jornada-laboral', component: CatJornadalabComponent, canActivate: [AuthGuard]  },
  {path: 'Percepcion-candidato', component: CatPercepcioncndaComponent, canActivate: [AuthGuard]  },
  {path: 'Percepcion-candidato-fr', component: CatPercepcioncndofrComponent, canActivate: [AuthGuard] },
  {path: 'Perfil', component: CatPerfilComponent, canActivate: [AuthGuard]  },
  {path: 'Pre-percepcion', component: CatPrepercepcionComponent, canActivate: [AuthGuard]  },
  {path: 'Edit-prepercepcion/:id', component: EditPrepercepcionComponent, canActivate: [AuthGuard]  },
  {path: 'Create-prepercepcion', component: CreatePrepercepcionComponent, canActivate: [AuthGuard]  },
  {path: 'Prioridad', component: CatPrioridadComponent, canActivate: [AuthGuard]  },
  {path: 'Proyecto', component: CatProyectoComponent, canActivate: [AuthGuard]  },
  {path: 'Seguimiento-candidato', component: CatSeguicandidatoComponent, canActivate: [AuthGuard]  },
  {path: 'Seguimiento-solicitud', component: CatSeguisolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Create-solicitud', component: CatSolicitudComponent, canActivate: [AuthGuard]  },
  {path: 'Idioma-solicitud', component: CatSolidiomaComponent, canActivate: [AuthGuard]  },
  {path: 'Solicitud-percepciones', component: CatSolpercepcionesComponent, canActivate: [AuthGuard]  },
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

  {path: 'Index-ti', component: IndexTiComponent, canActivate: [AuthGuard] },
  {path: 'Sol-val-ti', component: SolicValidadasTiComponent, canActivate: [AuthGuard] },
  {path: 'Can-val-ti', component: CandiValidadosTiComponent, canActivate: [AuthGuard] },

  {path: 'Index-comercial', component: IndexComercialComponent, canActivate: [AuthGuard] },
  {path: 'Aceptados-comercial', component: AceptadosComercialComponent, canActivate: [AuthGuard] },
  {path: 'Borrador-comercial', component: BorradorComercialComponent , canActivate: [AuthGuard] },
  {path: 'Can-pendientes-comercial', component: CandidatospendientesComercialComponent, canActivate: [AuthGuard] },
  {path: 'Rechazados-comercial', component: RechazadosComercialComponent , canActivate: [AuthGuard] },
  {path: 'Retro-comercial', component: RetroespectivasComercialComponent, canActivate: [AuthGuard] },
  {path: 'Sol-pendiente-comercial', component: SolicitudespendientesComercialComponent , canActivate: [AuthGuard] },

  {path: 'Index-reclutamiento', component: IndexReclutamientoComponent, canActivate: [AuthGuard] },
  {path: 'Can-rechazados-reclutamiento', component: CandirechaReclutamientoComponent, canActivate: [AuthGuard] },
  {path: 'Can-validados-reclutamiento', component: CandivaliReclutamientoComponent , canActivate: [AuthGuard] },
  {path: 'Pri-alta-reclutamiento', component: PrialtaReclutamientoComponent , canActivate: [AuthGuard] },
  {path: 'Pri-baja-reclutamiento', component: PribajaReclutamientoComponent , canActivate: [AuthGuard] },
  {path: 'Pri-media-reclutamiento', component: PrimediaReclutamientoComponent , canActivate: [AuthGuard] },
  {path: 'Rechazado-cliente-comercial', component: RechacliReclutamientoComponent , canActivate: [AuthGuard] },
  {path: 'Solicitud2-reclutamiento', component: Solicitud2ReclutamientoComponent  , canActivate: [AuthGuard] },
  {path: 'Index-rh', component: IndexRecursoshumanosComponent , canActivate: [AuthGuard] },
  {path: 'Contratados-rh', component: ContratadosRecursoshumanosComponent , canActivate: [AuthGuard] },
  {path: 'Pendientes-rh', component: PendientesRecursoshumanosComponent , canActivate: [AuthGuard] },
  {path: 'Pendientes-contratacion-rh', component: PendientescoRecursoshumanosComponent , canActivate: [AuthGuard] } ,
  {path: 'Index-lider', component: IndexLiderreclutamientoComponent , canActivate: [AuthGuard] },
  {path: 'Pri-altalider', component: PrialLiderrecluComponent , canActivate: [AuthGuard] },
  {path: 'Pri-medlider', component: PrimeLiderrecluComponent , canActivate: [AuthGuard] },
  {path: 'Pri-bajalider', component: PribaLiderrecluComponent , canActivate: [AuthGuard] },
  {path: 'Validadas-lider', component: ValidadasLiderrecluComponent , canActivate: [AuthGuard] },
  {path: 'Asignadas-lider', component: AsignaLiderrecluComponent , canActivate: [AuthGuard] },
  {path: 'Cand-reclider', component: CandRechaLiderreclutamientoComponent , canActivate: [AuthGuard] },
  {path: 'Cand-aceptados-lider', component: CandAceptadosLiderreclutamientoComponent , canActivate: [AuthGuard] }
  ];

 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
