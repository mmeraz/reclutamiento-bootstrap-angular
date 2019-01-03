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
import { RequeriBackofficeComponent } from './pages/usuarios/backoffice/componets/requeri-backoffice.component';
import { CandiBackofficeComponent } from './pages/usuarios/backoffice/componets/candi-backoffice.component';
import { RequipeBackofficeComponent } from './pages/usuarios/backoffice/componets/requipe-backoffice.component';
import { SolipenTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/solipen-tivalidacion.component';
import { CandivaliTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/candivali-tivalidacion.component';
import { OpcicandiTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/opcicandi-tivalidacion.component';
import { SolivaliTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/solivali-tivalidacion.component';
import { CandivaTivalidacionComponent } from './pages/usuarios/tivalidacion/componets/candiva-tivalidacion.component';
import { TablasolTivalidacionComponent } from './pages/usuarios/tivalidacion/solicitudvalidar/tablasol-tivalidacion.component';
import { ConsultarTivalidacionComponent } from './pages/usuarios/tivalidacion/consultar/consultar-tivalidacion.component';
import { AltaLiderreclutamientoComponent } from './pages/usuarios/liderreclutamiento/alta/alta-liderreclutamiento.component';
import { CitaclienteBackofficeComponent } from './pages/usuarios/backoffice/citacliente/citacliente-backoffice.component';

import { EditCandidatoComponent } from './catalogos/cat-candidato/edit-candidato.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { ListadoAComponent } from './pages/solicitud/listado-a.component';
import { ListadoMComponent } from './pages/solicitud/listado-m.component';
import { ListadoBComponent } from './pages/solicitud/listado-b.component';
import { IndexTiComponent } from './pages/usuarios/ti/index-ti.component';
import { SolicValidadasTiComponent } from './pages/usuarios/ti/components/solic-validadas-ti.component';
import { CandiValidadosTiComponent } from './pages/usuarios/ti/components/candi-validados-ti.component';
import { RechacliReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/rechacli-reclutamiento.component';
import { RechazadosComercialComponent } from './pages/usuarios/comercial/componets/rechazados-comercial.component';
import { CandirechaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/candirecha-reclutamiento.component';
import { PrialtaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/prialta-reclutamiento.component';
import { PribajaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/pribaja-reclutamiento.component';
import { PrimediaReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/primedia-reclutamiento.component';
import { CandivaliReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/candivali-reclutamiento.component';
import { IndexRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/index-recursoshumanos.component';
import { ContratadosRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/componets/contratados-recursoshumanos.component';
import { PendientesRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/componets/pendientes-recursoshumanos.component';
import { RetroespectivasComercialComponent } from './pages/usuarios/comercial/componets/retroespectivas-comercial.component';
import { AceptadosComercialComponent } from './pages/usuarios/comercial/componets/aceptados-comercial.component';
import { BorradorComercialComponent } from './pages/usuarios/comercial/componets/borrador-comercial.component';
import { CandidatospendientesComercialComponent } from './pages/usuarios/comercial/componets/candidatospendientes-comercial.component';
import { SolicitudespendientesComercialComponent } from './pages/usuarios/comercial/componets/solicitudespendientes-comercial.component';
import { Solicitud2ReclutamientoComponent } from './pages/usuarios/reclutamiento/componets/solicitud2-reclutamiento.component';
import { IndexComercialComponent } from './pages/usuarios/comercial/index-comercial.component';
import { IndexReclutamientoComponent } from './pages/usuarios/reclutamiento/index-reclutamiento.component';
import { PendientescoRecursoshumanosComponent } from './pages/usuarios/recursoshumanos/componets/pendientesco-recursoshumanos.component';
import { IndexLiderreclutamientoComponent } from './pages/usuarios/liderreclutamiento/index-liderreclutamiento.component';
import { PrialLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/prial-liderreclu.component';
import { AsignaLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/asigna-liderreclu.component';
import { PrimeLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/prime-liderreclu.component';
import { PribaLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/priba-liderreclu.component';
import { ValidadasLiderrecluComponent } from './pages/usuarios/liderreclutamiento/componets/validadas-liderreclu.component';
import { CandRechaLiderreclutamientoComponent } from './pages/usuarios/liderreclutamiento/componets/cand-recha-liderreclutamiento.component';
import { CandAceptadosLiderreclutamientoComponent } from './pages/usuarios/liderreclutamiento/componets/cand-aceptados-liderreclutamiento.component';
import { SeguimientoVtiComponent } from './catalogos/cat-seguisolicitud/seguimiento-vti.component';
import { IndexBackofficeComponent } from './pages/usuarios/backoffice/index-backoffice.component';
import { IndexTivalidacionComponent } from './pages/usuarios/tivalidacion/index-tivalidacion.component';
import { CandidatoValidarTiComponent } from './pages/usuarios/tivalidacion/candidatovalidar/candidato-validar-ti.component';
import { SoliReclutamientoComponent } from './pages/usuarios/reclutamiento/soli-reclutamiento/soli-reclutamiento.component';
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
    AceptadosComercialComponent,
    IndexComercialComponent,
    RechazadosComercialComponent,
    BorradorComercialComponent,
    CandidatospendientesComercialComponent,
    RetroespectivasComercialComponent,
    SolicitudespendientesComercialComponent,
    IndexRecursoshumanosComponent,
    PendientesRecursoshumanosComponent,
    PendientescoRecursoshumanosComponent,
    ContratadosRecursoshumanosComponent,
    IndexReclutamientoComponent,
    PrialtaReclutamientoComponent,
    PrimediaReclutamientoComponent,
    PribajaReclutamientoComponent,
    CandirechaReclutamientoComponent,
    CandivaliReclutamientoComponent,
    Solicitud2ReclutamientoComponent,
    RechacliReclutamientoComponent,
    IndexBackofficeComponent,
    RequeriBackofficeComponent,
    CandiBackofficeComponent,
    RequipeBackofficeComponent,
    IndexLiderreclutamientoComponent,
    PrialLiderrecluComponent,
    PrimeLiderrecluComponent,
    PribaLiderrecluComponent,
    AsignaLiderrecluComponent,
    ValidadasLiderrecluComponent,
    IndexTivalidacionComponent,
    SolipenTivalidacionComponent,
    CandivaliTivalidacionComponent,
    OpcicandiTivalidacionComponent,
    SolivaliTivalidacionComponent,
    CandivaTivalidacionComponent,
    TablasolTivalidacionComponent,
    ConsultarTivalidacionComponent,
    AltaLiderreclutamientoComponent,
    CitaclienteBackofficeComponent,
    EditCandidatoComponent,
    ListadoAComponent,
    ListadoMComponent,
    ListadoBComponent,
    SolicitudComponent,
    IndexTiComponent,
    IndexRecursoshumanosComponent,
    IndexComercialComponent,
    IndexReclutamientoComponent,
    SolicValidadasTiComponent,
    CandiValidadosTiComponent,
    RechacliReclutamientoComponent,
    RechazadosComercialComponent,
    CandirechaReclutamientoComponent,
    PrialtaReclutamientoComponent,
    PribajaReclutamientoComponent,
    PrimediaReclutamientoComponent,
    CandivaliReclutamientoComponent,
    ContratadosRecursoshumanosComponent,
    PendientesRecursoshumanosComponent,
    PendientescoRecursoshumanosComponent,
    RetroespectivasComercialComponent,
    AceptadosComercialComponent,
    BorradorComercialComponent,
    CandidatospendientesComercialComponent,
    SolicitudespendientesComercialComponent,
    Solicitud2ReclutamientoComponent,
    IndexLiderreclutamientoComponent,
    PrialLiderrecluComponent,
    AsignaLiderrecluComponent,
    PrimeLiderrecluComponent,
    PribaLiderrecluComponent,
    ValidadasLiderrecluComponent,
    CandRechaLiderreclutamientoComponent,
    CandAceptadosLiderreclutamientoComponent,
    SeguimientoVtiComponent,
    CandidatoValidarTiComponent,
    SoliReclutamientoComponent
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
