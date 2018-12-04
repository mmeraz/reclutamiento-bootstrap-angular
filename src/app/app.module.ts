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
import { CatCompcandidatoComponent } from './catalogos/cat-compcandidato/cat-compcandidato.component';
import { CatContactclienteComponent } from './catalogos/cat-contactcliente/cat-contactcliente.component';
import { CatClienteComponent } from './catalogos/cat-cliente/cat-cliente.component';
import { CatCandidatoComponent } from './catalogos/cat-candidato/cat-candidato.component';
import { CatSolicitudComponent } from './catalogos/cat-solicitud/cat-solicitud.component';
import { CatConteccandidatoComponent } from './catalogos/cat-conteccandidato/cat-conteccandidato.component';
import { CatComphabilidadesComponent } from './catalogos/cat-comphabilidades/cat-comphabilidades.component';
import { CatContactoComponent } from './catalogos/cat-contacto/cat-contacto.component';
import { CatContecnicosComponent } from './catalogos/cat-contecnicos/cat-contecnicos.component';
import { CatDoccandidatoComponent } from './catalogos/cat-doccandidato/cat-doccandidato.component';
import { CatEntrevistaComponent } from './catalogos/cat-entrevista/cat-entrevista.component';
import { CatEquipoComponent } from './catalogos/cat-equipo/cat-equipo.component';
import { CatEstacandidatoComponent } from './catalogos/cat-estacandidato/cat-estacandidato.component';
import { CatEquipsolComponent } from './catalogos/cat-equipsol/cat-equipsol.component';
import { CatEstasolicitudComponent } from './catalogos/cat-estasolicitud/cat-estasolicitud.component';
import { CatFuncionesComponent } from './catalogos/cat-funciones/cat-funciones.component';
import { CatHabsolicitudComponent } from './catalogos/cat-habsolicitud/cat-habsolicitud.component';
import { CatIdiomacandidatoComponent } from './catalogos/cat-idiomacandidato/cat-idiomacandidato.component';
import { CatIdiomaComponent } from './catalogos/cat-idioma/cat-idioma.component';
import { CatJornadalabComponent } from './catalogos/cat-jornadalab/cat-jornadalab.component';
import { CatPercepcioncndaComponent } from './catalogos/cat-percepcioncnda/cat-percepcioncnda.component';
import { CatPercepcioncndofrComponent } from './catalogos/cat-percepcioncndofr/cat-percepcioncndofr.component';
import { CatPerfilComponent } from './catalogos/cat-perfil/cat-perfil.component';
import { CatPrepercepcionComponent } from './catalogos/cat-prepercepcion/cat-prepercepcion.component';
import { CatPrioridadComponent } from './catalogos/cat-prioridad/cat-prioridad.component';
import { CatProyectoComponent } from './catalogos/cat-proyecto/cat-proyecto.component';
import { CatSeguicandidatoComponent } from './catalogos/cat-seguicandidato/cat-seguicandidato.component';
import { CatSeguisolicitudComponent } from './catalogos/cat-seguisolicitud/cat-seguisolicitud.component';
import { CatSolidiomaComponent } from './catalogos/cat-solidioma/cat-solidioma.component';
import { CatSolpercepcionesComponent } from './catalogos/cat-solpercepciones/cat-solpercepciones.component';
import { CatConsolicitadoComponent } from './catalogos/cat-consolicitado/cat-consolicitado.component';
import { CatUsuarioComponent } from './catalogos/cat-usuario/cat-usuario.component';
import { routing, appRoutingProviders } from './app.routing';
import { LoginComponent } from './pages/login/login.component';
import { EditAreaComponent } from './catalogos/cat-area/edit.component';
import { CreateAreaComponent } from './catalogos/cat-area/create-area.component';
import { CatTipvacanteComponent } from './catalogos/cat-tipvacante/cat-tipvacante.component';
import { HomeComponent } from './pages/home/home.component';
import { CandidatoComponent} from './pages/candidato/candidato.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { CrateCandidatoComponent } from './catalogos/cat-candidato/crate-candidato/crate-candidato.component';
import { CreateCandidatoComponent } from './catalogos/cat-candidato/create-candidato.component';
import { EditComponent } from './catalogos/cat-candidato/edit.component';
import { CreateClienteComponent } from './catalogos/cat-cliente/create-cliente.component';
import { CreatePrioridadComponent } from './catalogos/cat-prioridad/create-prioridad.component';
import { CreatePrioridaComponent } from './catalogos/cat-prioridad/create-priorida.component';
import { CreateJornadalabComponent } from './catalogos/cat-jornadalab/create-jornadalab.component';
import { CreatePerfilComponent } from './catalogos/cat-perfil/create-perfil.component';
import { CreateEquipoComponent } from './catalogos/cat-equipo/create-equipo.component';
import { CreateUsuarioComponent } from './catalogos/cat-usuario/create-usuario.component';
import { CreateTipvacanteComponent } from './catalogos/cat-tipvacante/create-tipvacante.component';
import { CreatePrepercepcionComponent } from './catalogos/cat-prepercepcion/create-prepercepcion.component';
import { CreateEstasolicitudComponent } from './catalogos/cat-estasolicitud/create-estasolicitud.component';
import { CreateEstacandidatoComponent } from './catalogos/cat-estacandidato/create-estacandidato.component';
import { CreateComphabildiadesComponent } from './catalogos/cat-comphabilidades/create-comphabildiades.component';
import { CreateComphabilidadesComponent } from './catalogos/cat-comphabilidades/create-comphabilidades.component';
import { CreateIdiomaComponent } from './catalogos/cat-idioma/create-idioma.component';
import { CreateContecnicosComponent } from './catalogos/cat-contecnicos/create-contecnicos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatAreaComponent,
    CatCandidatoComponent,
    CatClienteComponent,
    CatCompcandidatoComponent,
    CatComphabilidadesComponent,
    CatConsolicitadoComponent,
    CatContactclienteComponent,
    CatContactoComponent,
    CatConteccandidatoComponent,
    CatContecnicosComponent,
    CatDocumentosComponent,
    CatDoccandidatoComponent,
    CatEntrevistaComponent,
    CatEquipoComponent,
    CatEquipsolComponent,
    CatEstacandidatoComponent,
    CatEstasolicitudComponent,
    CatFuncionesComponent,
    CatHabsolicitudComponent,
    CatIdiomaComponent,
    CatIdiomacandidatoComponent,
    CatJornadalabComponent,
    CatPercepcioncndaComponent,
    CatPercepcioncndofrComponent,
    CatPerfilComponent,
    CatPrepercepcionComponent,
    CatPrioridadComponent,
    CatProyectoComponent,
    CatSeguicandidatoComponent,
    CatSeguisolicitudComponent,
    CatSolicitudComponent,
    CatSolidiomaComponent,
    CatSolpercepcionesComponent,
    CatTipvacanteComponent,
    CatUsuarioComponent,
    LoginComponent,
    EditAreaComponent,
    CreateAreaComponent,
    HomeComponent,
    CandidatoComponent,
<<<<<<< HEAD
    SolicitudComponent,
    NotfoundComponent,
    CrateCandidatoComponent,
    CreateCandidatoComponent,
    EditComponent,
    CreateClienteComponent,
    CreatePrioridadComponent,
    CreatePrioridaComponent,
    CreateJornadalabComponent,
    CreatePerfilComponent,
    CreateEquipoComponent,
    CreateUsuarioComponent,
    CreateTipvacanteComponent,
    CreatePrepercepcionComponent,
    CreateEstasolicitudComponent,
    CreateEstacandidatoComponent,
    CreateComphabildiadesComponent,
    CreateComphabilidadesComponent,
    CreateIdiomaComponent,
    CreateContecnicosComponent
=======
    NotfoundComponent
>>>>>>> 96d018f0c64598b4b3d215128786226778be4d49
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
