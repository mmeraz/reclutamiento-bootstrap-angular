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
import { SolicValidadasTiComponent } from './pages/usuarios/ti/components/solic-validadas-ti.component';
import { CandiValidadosTiComponent } from './pages/usuarios/ti/components/candi-validados-ti.component';
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
import { SeguimientoVtiComponent } from './catalogos/cat-seguisolicitud/seguimiento-vti.component';
import { IndexBackofficeComponent } from './pages/usuarios/backoffice/index-backoffice.component';
import { IndexTivalidacionComponent } from './pages/usuarios/tivalidacion/index-tivalidacion.component';
import { CandidatoValidarTiComponent } from './pages/usuarios/tivalidacion/candidatovalidar/candidato-validar-ti.component';
import { SoliReclutamientoComponent } from './pages/usuarios/reclutamiento/soli-reclutamiento/soli-reclutamiento.component';
import { IndexVerifivigenciaComponent } from './pages/usuarios/comercial/verificarvigencia/index-verifivigencia.component';
import { CanrechaliderComponent } from './pages/usuarios/liderreclutamiento/componets/canrechalider.component';
import { CandiacepliderComponent } from './pages/usuarios/liderreclutamiento/componets/candiaceplider.component';
import { CandiaceprecluComponent } from './pages/usuarios/reclutamiento/componets/candiacepreclu.component';
import { RechaclienComponent } from './pages/usuarios/reclutamiento/componets/rechaclien.component';
import { Solicitu2liderComponent } from './pages/usuarios/liderreclutamiento/componets/solicitu2lider.component';
import { IndexRetroComponent } from './pages/usuarios/comercial/retroexpectiva/index-retro.component';
import { IndexRetroComComponent } from './pages/usuarios/comercial/retroexpeccompara/index-retro-com.component';
import { DocumentosComponent } from './pages/usuarios/recursoshumanos/documentos/documentos.component';
import { VisuaSolComponent } from './pages/usuarios/tivalidacion/visualizacion/visuasol.component';
import { CandRechazadoComponent } from './pages/usuarios/reclutamiento/cand-rechazado/cand-rechazado.component';
import { RechazadoClienteCandComponent } from './pages/candidato/rechazado-cliente/rechazado-cliente-cand.component';
import { RechazotiComponent } from './pages/solicitud/rechazadoti/rechazoti.component';
import { PerdidasolicitudComponent } from './pages/solicitud/perdidasolicitud/perdidasolicitud.component';
import { EsperasolicitudComponent } from './pages/solicitud/esperasolicitud/esperasolicitud.component';
import { PendienterespuestaComponent } from './pages/solicitud/pendienterespuesta/pendienterespuesta.component';
import { SegundaopcionComponent } from './pages/solicitud/segundaopcion/segundaopcion.component';
import { AceptadostiComponent } from './pages/solicitud/aceptadosti/aceptadosti.component';
import { BorradorComponent } from './pages/solicitud/borrador/borrador.component';
import { PendienteclienteComponent } from './pages/solicitud/pendientecliente/pendientecliente.component';
import { AltaAceptadoComponent } from './pages/usuarios/comercial/componets/aceptados/alta-aceptado/alta-aceptado.component';
import { BajaAceptadoComponent } from './pages/usuarios/comercial/componets/aceptados/baja-aceptado/baja-aceptado.component';
import { MediaAceptadoComponent } from './pages/usuarios/comercial/componets/aceptados/media-aceptado/media-aceptado.component';
import { AltaRechazadoComponent } from './pages/usuarios/comercial/componets/rechazados/alta-rechazado/alta-rechazado.component';
import { MediaRechazadoComponent } from './pages/usuarios/comercial/componets/rechazados/media-rechazado/media-rechazado.component';
import { BajaRechazadoComponent } from './pages/usuarios/comercial/componets/rechazados/baja-rechazado/baja-rechazado.component';
import { CandidatovalidadoComponent } from './pages/usuarios/backoffice/candidatos/candidatovalidado.component';
import { CandidatoentrevistaComponent } from './pages/usuarios/backoffice/candidatos/candidatoentrevista.component';
import { CandidatorechazadotiComponent } from './pages/usuarios/backoffice/candidatos/candidatorechazadoti.component';
import { CandidatopendientevalitiComponent } from './pages/usuarios/backoffice/candidatos/candidatopendientevaliti.component';
import { CandidatopendientrevistaComponent } from './pages/usuarios/backoffice/candidatos/candidatopendientrevista.component';
import { CandidatoentreagendaComponent } from './pages/usuarios/backoffice/candidatos/candidatoentreagenda.component';
import { CandidatoentrevistadoComponent } from './pages/usuarios/backoffice/candidatos/candidatoentrevistado.component';
import { CandidatorechazacliComponent } from './pages/usuarios/backoffice/candidatos/candidatorechazacli.component';
import { CandidatoaceptacliComponent } from './pages/usuarios/backoffice/candidatos/candidatoaceptacli.component';
import { CandidatorechazacandiComponent } from './pages/usuarios/backoffice/candidatos/candidatorechazacandi.component';
import { CandidatopendientedocuComponent } from './pages/usuarios/backoffice/candidatos/candidatopendientedocu.component';
import { CandidatopendicontraComponent } from './pages/usuarios/backoffice/candidatos/candidatopendicontra.component';
import { CandidatocontratadoComponent } from './pages/usuarios/backoffice/candidatos/candidatocontratado.component';
import { CandidatoasignableComponent } from './pages/usuarios/backoffice/candidatos/candidatoasignable.component';
import { CandidatopendiresComponent } from './pages/usuarios/backoffice/candidatos/candidatopendires.component';
import { CandidatosegunopComponent } from './pages/usuarios/backoffice/candidatos/candidatosegunop.component';
import { AltaPendTiComponent } from './pages/usuarios/backoffice/requerimientos/pendienteTI/alta-pend-ti/alta-pend-ti.component';
import { MediaPendTiComponent } from './pages/usuarios/backoffice/requerimientos/pendienteTI/media-pend-ti/media-pend-ti.component';
import { BajaPendTiComponent } from './pages/usuarios/backoffice/requerimientos/pendienteTI/baja-pend-ti/baja-pend-ti.component';
import { BajaValTiComponent } from './pages/usuarios/backoffice/requerimientos/validadasTI/baja-val-ti/baja-val-ti.component';
import { AltaValTiComponent } from './pages/usuarios/backoffice/requerimientos/validadasTI/alta-val-ti/alta-val-ti.component';
import { MediaValTiComponent } from './pages/usuarios/backoffice/requerimientos/validadasTI/media-val-ti/media-val-ti.component';
import { BajaRechaTiComponent } from './pages/usuarios/backoffice/requerimientos/rechazadasTI/baja-recha-ti/baja-recha-ti.component';
import { AltaRechaTiComponent } from './pages/usuarios/backoffice/requerimientos/rechazadasTI/alta-recha-ti/alta-recha-ti.component';
import { MediaRechaTiComponent } from './pages/usuarios/backoffice/requerimientos/rechazadasTI/media-recha-ti/media-recha-ti.component';
import { MediaAsignadasComponent } from './pages/usuarios/backoffice/requerimientos/asignadas/media-asignadas/media-asignadas.component';
import { AltaAsignadasComponent } from './pages/usuarios/backoffice/requerimientos/asignadas/alta-asignadas/alta-asignadas.component';
import { BajaAsignadasComponent } from './pages/usuarios/backoffice/requerimientos/asignadas/baja-asignadas/baja-asignadas.component';
import { SegSolicitudComponent } from './pages/usuarios/backoffice/seguimiento/seg-solicitud/seg-solicitud.component';
import { SegCandidatoComponent } from './pages/usuarios/backoffice/seguimiento/seg-candidato/seg-candidato.component';
import { AltaPendRespuestaComponent } from './pages/usuarios/backoffice/requerimientos/pendienteRespuesta/alta-pend-respuesta/alta-pend-respuesta.component';
import { MediaPendRespuestaComponent } from './pages/usuarios/backoffice/requerimientos/pendienteRespuesta/media-pend-respuesta/media-pend-respuesta.component';
import { BajaPendRespuestaComponent } from './pages/usuarios/backoffice/requerimientos/pendienteRespuesta/baja-pend-respuesta/baja-pend-respuesta.component';
import { BajaAcepClienteComponent } from './pages/usuarios/backoffice/requerimientos/aceptadasCliente/baja-acep-cliente/baja-acep-cliente.component';
import { MediaAcepClienteComponent } from './pages/usuarios/backoffice/requerimientos/aceptadasCliente/media-acep-cliente/media-acep-cliente.component';
import { AltaAcepClienteComponent } from './pages/usuarios/backoffice/requerimientos/aceptadasCliente/alta-acep-cliente/alta-acep-cliente.component';
import { AltaPerdidosComponent } from './pages/usuarios/backoffice/requerimientos/perdidos/alta-perdidos/alta-perdidos.component';
import { BajaPerdidosComponent } from './pages/usuarios/backoffice/requerimientos/perdidos/baja-perdidos/baja-perdidos.component';
import { MediaPerdidosComponent } from './pages/usuarios/backoffice/requerimientos/perdidos/media-perdidos/media-perdidos.component';
import { CandPendValTiComponent } from './pages/usuarios/backoffice/candidatos/pendientesTI/cand-pend-val-ti/cand-pend-val-ti.component';
import { CandRechTiComponent } from './pages/usuarios/backoffice/candidatos/rechazadosTI/cand-rech-ti/cand-rech-ti.component';
import { CandPendEntreComponent } from './pages/usuarios/backoffice/candidatos/pendienteEntrevista/cand-pend-entre/cand-pend-entre.component';
import { CandAgendadoComponent } from './pages/usuarios/backoffice/candidatos/entrevistaAgendada/cand-agendado/cand-agendado.component';
import { CandEntrevistadoComponent } from './pages/usuarios/backoffice/candidatos/entrevistado/cand-entrevistado/cand-entrevistado.component';
import { CandRechClienteComponent } from './pages/usuarios/backoffice/candidatos/rechazadoCliente/cand-rech-cliente/cand-rech-cliente.component';
import { CandRechCandComponent } from './pages/usuarios/backoffice/candidatos/rechazadoCandidato/cand-rech-cand/cand-rech-cand.component';
import { CandAceptadoComponent } from './pages/usuarios/backoffice/candidatos/aceptadoCliente/cand-aceptado/cand-aceptado.component';
import { CandPendDocComponent } from './pages/usuarios/backoffice/candidatos/pendienteDoc/cand-pend-doc/cand-pend-doc.component';
import { CandPendContratoComponent } from './pages/usuarios/backoffice/candidatos/pendienteDoc/cand-pend-contrato/cand-pend-contrato.component';
import { MediRecanComponent } from './pages/usuarios/backoffice/requerimientos/reqcance/medireca/medi-recan.component';
import { BajaRecanComponent } from './pages/usuarios/backoffice/requerimientos/reqcance/bajareca/baja-recan.component';
import { AltaRecanComponent } from './pages/usuarios/backoffice/requerimientos/reqcance/altareca/alta-recan.component';
import { AltaReqespeComponent } from './pages/usuarios/backoffice/requerimientos/reqespe/altaespe/alta-reqespe.component';
import { MediaReqespeComponent } from './pages/usuarios/backoffice/requerimientos/reqespe/mediespe/media-reqespe.component';
import { BajaReqespeComponent } from './pages/usuarios/backoffice/requerimientos/reqespe/bajaespe/baja-reqespe.component';
import { AltaPorasigComponent } from './pages/usuarios/backoffice/requerimientos/reqeporasig/altaporasig/alta-porasig.component';
import { MediaPorasigComponent } from './pages/usuarios/backoffice/requerimientos/reqeporasig/mediaporasig/media-porasig.component';
import { BajaPorasigComponent } from './pages/usuarios/backoffice/requerimientos/reqeporasig/bajaporasig/baja-porasig.component';
import { AltaReqseopComponent } from './pages/usuarios/backoffice/requerimientos/reqeseop/altareqseop/alta-reqseop.component';
import { MediaReqseopComponent } from './pages/usuarios/backoffice/requerimientos/reqeseop/mediareqseop/media-reqseop.component';
import { BajaReqseopComponent } from './pages/usuarios/backoffice/requerimientos/reqeseop/bajareqseop/baja-reqseop.component';
import { CandidatoValiComponent } from './pages/usuarios/reclutamiento/candidato-vali/candidato-vali.component';
import { CandiValitiComponent } from './pages/usuarios/tivalidacion/candi-valiti/candi-valiti.component';

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
    IndexBackofficeComponent,
    RequeriBackofficeComponent,
    CandiBackofficeComponent,
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
    IndexRecursoshumanosComponent,
    IndexComercialComponent,
    IndexReclutamientoComponent,
    SolicValidadasTiComponent,
    CandiValidadosTiComponent,
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
    SeguimientoVtiComponent,
    CandidatoValidarTiComponent,
    CanrechaliderComponent,
    SoliReclutamientoComponent,
    IndexVerifivigenciaComponent,
    CandiacepliderComponent,
    RechaclienComponent,
    CandiaceprecluComponent,
    Solicitu2liderComponent,
    IndexRetroComponent,
    IndexRetroComComponent,
    RetroespectivasComercialComponent,
    DocumentosComponent,
    DocumentosComponent,
    VisuaSolComponent,
    RechazadoClienteCandComponent,
    CandRechazadoComponent,
    RechazotiComponent,
    PerdidasolicitudComponent,
    EsperasolicitudComponent,
    PendienterespuestaComponent,
    SegundaopcionComponent,
    AceptadostiComponent,
    BorradorComponent,
    PendienteclienteComponent,
    CandidatovalidadoComponent,
    CandidatoentrevistaComponent,
    CandidatorechazadotiComponent,
    CandidatopendientevalitiComponent,
    CandidatopendientrevistaComponent,
    CandidatoentreagendaComponent,
    CandidatoentrevistadoComponent,
    CandidatorechazacliComponent,
    CandidatoaceptacliComponent,
    CandidatorechazacandiComponent,
    CandidatopendientedocuComponent,
    CandidatopendicontraComponent,
    CandidatocontratadoComponent,
    CandidatoasignableComponent,
    CandidatopendiresComponent,
    CandidatosegunopComponent,
    AltaAceptadoComponent,
    BajaAceptadoComponent,
    MediaAceptadoComponent,
    AltaRechazadoComponent,
    MediaRechazadoComponent,
    BajaRechazadoComponent,
    AltaPendTiComponent,
    MediaPendTiComponent,
    BajaPendTiComponent,
    BajaValTiComponent,
    AltaValTiComponent,
    MediaValTiComponent,
    BajaRechaTiComponent,
    AltaRechaTiComponent,
    MediaRechaTiComponent,
    MediaAsignadasComponent,
    AltaAsignadasComponent,
    BajaAsignadasComponent,
    SegSolicitudComponent,
    SegCandidatoComponent,
    AltaPendRespuestaComponent,
    MediaPendRespuestaComponent,
    BajaPendRespuestaComponent,
    BajaAcepClienteComponent,
    MediaAcepClienteComponent,
    AltaAcepClienteComponent,
    AltaPerdidosComponent,
    BajaPerdidosComponent,
    MediaPerdidosComponent,
    CandPendValTiComponent,
    CandRechTiComponent,
    CandPendEntreComponent,
    CandAgendadoComponent,
    CandEntrevistadoComponent,
    CandRechClienteComponent,
    CandRechCandComponent,
    CandAceptadoComponent,
    CandPendDocComponent,
    CandPendContratoComponent,
    MediRecanComponent,
    BajaRecanComponent,
    AltaRecanComponent,
    AltaReqespeComponent,
    MediaReqespeComponent,
    BajaReqespeComponent,
    AltaPorasigComponent,
    MediaPorasigComponent,
    BajaPorasigComponent,
    AltaReqseopComponent,
    MediaReqseopComponent,
    BajaReqseopComponent,
    CandidatoValiComponent,
    CandiValitiComponent,
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
