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
import { LoginComponent } from './login/login.component';
import { EditAreaComponent } from './catalogos/cat-area/edit.component';
import { CreateAreaComponent } from './catalogos/cat-area/create-area.component';
import { CatTipvacanteComponent } from './catalogos/cat-tipvacante/cat-tipvacante.component';



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
    CreateAreaComponent
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
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
