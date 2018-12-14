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





 const appRoutes: Routes = [

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
  {path: '**', component: NotfoundComponent, canActivate: [AuthGuard] }
  ];

 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
