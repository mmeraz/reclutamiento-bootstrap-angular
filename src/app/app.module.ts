import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { CatAreaComponent } from './catalogos/cat-area/cat-area.component';
import { CatDocumentosComponent } from './catalogos/cat-documentos/cat-documentos.component';
import { CatContactclienteComponent } from './catalogos/cat-contactcliente/cat-contactcliente.component';
import { CatClienteComponent } from './catalogos/cat-cliente/cat-cliente.component';
import { CatCandidatoComponent } from './catalogos/cat-candidato/cat-candidato.component';
import { CatSolicitudComponent } from './catalogos/cat-solicitud/cat-solicitud.component';
import { CatComphabilidadesComponent } from './catalogos/cat-comphabilidades/cat-comphabilidades.component';
import { CatContecnicosComponent } from './catalogos/cat-contecnicos/cat-contecnicos.component';
import { CatDoccandidatoComponent } from './catalogos/cat-doccandidato/cat-doccandidato.component';
import { CatEntrevistaComponent } from './catalogos/cat-entrevista/cat-entrevista.component';
import { CatEquipoComponent } from './catalogos/cat-equipo/cat-equipo.component';
import { CatEstacandidatoComponent } from './catalogos/cat-estacandidato/cat-estacandidato.component';
import { CatEstasolicitudComponent } from './catalogos/cat-estasolicitud/cat-estasolicitud.component';
import { CatIdiomaComponent } from './catalogos/cat-idioma/cat-idioma.component';
import { CatJornadalabComponent } from './catalogos/cat-jornadalab/cat-jornadalab.component';
import { CatPerfilComponent } from './catalogos/cat-perfil/cat-perfil.component';
import { CatPrepercepcionComponent } from './catalogos/cat-prepercepcion/cat-prepercepcion.component';
import { CatSeguicandidatoComponent } from './catalogos/cat-seguicandidato/cat-seguicandidato.component';
import { CatSeguisolicitudComponent } from './catalogos/cat-seguisolicitud/cat-seguisolicitud.component';
import { CatUsuarioComponent } from './catalogos/cat-usuario/cat-usuario.component';
import { routing, appRoutingProviders } from './app.routing';
import { LoginComponent } from './pages/login/login.component';
import { EditAreaComponent } from './catalogos/cat-area/edit.component';
import { CreateAreaComponent } from './catalogos/cat-area/create-area.component';
import { CatTipvacanteComponent } from './catalogos/cat-tipvacante/cat-tipvacante.component';
import { HomeComponent } from './pages/home/home.component';
import { CandidatoComponent} from './pages/candidato/candidato.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CrearContactoComponent } from './catalogos/cat-contactcliente/crear-contacto.component';
import { EditContactoComponent } from './catalogos/cat-contactcliente/edit-contacto.component';
import { CreateClienteComponent } from './catalogos/cat-cliente/create-cliente.component';
import { EditClienteComponent } from './catalogos/cat-cliente/edit-cliente.component';
import { CatPrioridadComponent } from './catalogos/cat-prioridad/cat-prioridad.component';
import { CreatePrioridadComponent } from './catalogos/cat-prioridad/create-prioridad.component';
import { EditPrioridadComponent } from './catalogos/cat-prioridad/edit-prioridad.component';
import { EditJornadaComponent } from './catalogos/cat-jornadalab/edit.component';
import { CreateJornadalabComponent} from './catalogos/cat-jornadalab/create-jornadalab.component';
import { EditPerfilComponent } from './catalogos/cat-perfil/edit-perfil.component';
import { EditEquipoComponent} from './catalogos/cat-equipo/edit-equipo.component';
import { EditUsuarioComponent} from './catalogos/cat-usuario/edit-usuario.component';
import { EditEstasolicitudComponent} from './catalogos/cat-estasolicitud/edit-estasolicitud.component';
import { EditPrepercepcionComponent } from './catalogos/cat-prepercepcion/edit-prepercepcion.component';
import { EditTipvacanteComponent} from './catalogos/cat-tipvacante/edit-tipvacante.component';
import { CreateEquipoComponent } from './catalogos/cat-equipo/create-equipo.component';
import { CreatePerfilComponent } from './catalogos/cat-perfil/create-perfil.component';
import { CreateUsuarioComponent } from './catalogos/cat-usuario/create-usuario.component';
import { CreateTipvacanteComponent } from './catalogos/cat-tipvacante/create-tipvacante.component';
import { CreatePrepercepcionComponent } from './catalogos/cat-prepercepcion/create-prepercepcion.component';
import { CreateEstasolicitudComponent } from './catalogos/cat-estasolicitud/create-estasolicitud.component';
import { CreateComphabilidadesComponent } from './catalogos/cat-comphabilidades/create-comphabilidades.component';
import { CreateIdiomaComponent } from './catalogos/cat-idioma/create-idioma.component';
import { EditContecnicosComponent } from './catalogos/cat-contecnicos/edit-contecnicos.component';
import { CreateContecnicosComponent} from './catalogos/cat-contecnicos/create-contecnicos.component';
import { ListSolicitudComponent } from './catalogos/cat-solicitud/list-solicitud.component';
import { EditSolicitudComponent } from './catalogos/cat-solicitud/edit-solicitud.component';
import { CreateEstatuscandidatoComponent } from './catalogos/cat-estacandidato/create-estatuscandidato.component';
import { EditComphabilidadesComponent } from './catalogos/cat-comphabilidades/edit-comphabilidades.component';
import { EditEstatuscandidatoComponent } from './catalogos/cat-estacandidato/edit-estatuscandidato.component';
import { EditIdiomaComponent } from './catalogos/cat-idioma/edit-idioma.component';
import { DetalleSolicitudComponent } from './catalogos/cat-solicitud/detalle-solicitud.component';
import { EditCandidatoComponent } from './catalogos/cat-candidato/edit-candidato.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { ListadoAComponent } from './pages/solicitud/listado-a.component';
import { ListadoMComponent } from './pages/solicitud/listado-m.component';
import { ListadoBComponent } from './pages/solicitud/listado-b.component';
import { IndexTiComponent } from './pages/usuarios/ti/index-ti.component';
import { SolicValidadasTiComponent } from './pages/usuarios/ti/components/solic-validadas-ti.component';
import { CandiValidadosTiComponent } from './pages/usuarios/ti/components/candi-validados-ti.component';
import { SeguimientoVtiComponent } from './catalogos/cat-seguisolicitud/seguimiento-vti.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatAreaComponent,
    CatCandidatoComponent,
    CatClienteComponent,
    CatComphabilidadesComponent,
    CatContactclienteComponent,
    CatContecnicosComponent,
    CatDocumentosComponent,
    CatDoccandidatoComponent,
    CatEntrevistaComponent,
    CatEquipoComponent,
    CatEstacandidatoComponent,
    CatEstasolicitudComponent,
    CatIdiomaComponent,
    CatJornadalabComponent,
    CatPerfilComponent,
    CatPrepercepcionComponent,
    CatSeguicandidatoComponent,
    CatSeguisolicitudComponent,
    CatSolicitudComponent,
    CatTipvacanteComponent,
    CatUsuarioComponent,
    LoginComponent,
    EditAreaComponent,
    CreateAreaComponent,
    HomeComponent,
    CandidatoComponent,
    NotfoundComponent,
    CreateEquipoComponent,
    CreatePerfilComponent,
    CreateUsuarioComponent,
    CrearContactoComponent,
    EditContactoComponent,
    CreateClienteComponent,
    EditClienteComponent,
    CatPrioridadComponent,
    CreatePrioridadComponent,
    EditPrioridadComponent,
    EditJornadaComponent,
    CreateJornadalabComponent,
    EditPerfilComponent,
    EditEquipoComponent,
    EditUsuarioComponent,
    EditEstasolicitudComponent,
    CreateEstasolicitudComponent,
    CreateEstatuscandidatoComponent,
    CreateComphabilidadesComponent,
    CreateIdiomaComponent,
    EditPrepercepcionComponent,
    CreatePrepercepcionComponent,
    EditTipvacanteComponent,
    CreateTipvacanteComponent,
    EditContecnicosComponent,
    CreateContecnicosComponent,
    ListSolicitudComponent,
    EditSolicitudComponent,
    EditComphabilidadesComponent,
    EditEstatuscandidatoComponent,
    EditIdiomaComponent,
    DetalleSolicitudComponent,
    EditCandidatoComponent,
    ListadoAComponent,
    ListadoMComponent,
    ListadoBComponent,
    SolicitudComponent,
    IndexTiComponent,
    SolicValidadasTiComponent,
    CandiValidadosTiComponent,
    SeguimientoVtiComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  exports: [],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
