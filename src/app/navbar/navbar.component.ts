import { Component, OnInit } from '@angular/core';

import { CatAreaComponent } from '../catalogos/cat-area/cat-area.component';
import { CatCandidatoComponent } from '../catalogos/cat-candidato/cat-candidato.component';
import { CatClienteComponent } from '../catalogos/cat-cliente/cat-cliente.component';
import { CatCompcandidatoComponent } from '../catalogos/cat-compcandidato/cat-compcandidato.component';
import { CatComphabilidadesComponent } from '../catalogos/cat-comphabilidades/cat-comphabilidades.component';
import { CatConsolicitadoComponent } from '../catalogos/cat-consolicitado/cat-consolicitado.component';
import { CatContactclienteComponent } from '../catalogos/cat-contactcliente/cat-contactcliente.component';
import { CatContactoComponent } from '../catalogos/cat-contacto/cat-contacto.component';
import { CatConteccandidatoComponent } from '../catalogos/cat-conteccandidato/cat-conteccandidato.component';
import { CatContecnicosComponent } from '../catalogos/cat-contecnicos/cat-contecnicos.component';
import { CatDoccandidatoComponent } from '../catalogos/cat-doccandidato/cat-doccandidato.component';
import { CatDocumentosComponent } from '../catalogos/cat-documentos/cat-documentos.component';
import { CatEntrevistaComponent } from '../catalogos/cat-entrevista/cat-entrevista.component';
import { CatEquipoComponent } from '../catalogos/cat-equipo/cat-equipo.component';
import { CatEquipsolComponent } from '../catalogos/cat-equipsol/cat-equipsol.component';
import { CatEstacandidatoComponent } from '../catalogos/cat-estacandidato/cat-estacandidato.component';
import { CatEstasolicitudComponent } from '../catalogos/cat-estasolicitud/cat-estasolicitud.component';
import { CatFuncionesComponent } from '../catalogos/cat-funciones/cat-funciones.component';
import { CatHabsolicitudComponent } from '../catalogos/cat-habsolicitud/cat-habsolicitud.component';
import { CatIdiomaComponent } from '../catalogos/cat-idioma/cat-idioma.component';
import { CatIdiomacandidatoComponent } from '../catalogos/cat-idiomacandidato/cat-idiomacandidato.component';
import { CatJornadalabComponent } from '../catalogos/cat-jornadalab/cat-jornadalab.component';
import { CatPercepcioncndaComponent } from '../catalogos/cat-percepcioncnda/cat-percepcioncnda.component';
import { CatPercepcioncndofrComponent } from '../catalogos/cat-percepcioncndofr/cat-percepcioncndofr.component';
import { CatPerfilComponent } from '../catalogos/cat-perfil/cat-perfil.component';
import { CatPrepercepcionComponent } from '../catalogos/cat-prepercepcion/cat-prepercepcion.component';
import { CatPrioridadComponent } from '../catalogos/cat-prioridad/cat-prioridad.component';
import { CatProyectoComponent } from '../catalogos/cat-proyecto/cat-proyecto.component';
import { CatSeguicandidatoComponent } from '../catalogos/cat-seguicandidato/cat-seguicandidato.component';
import { CatSeguisolicitudComponent } from '../catalogos/cat-seguisolicitud/cat-seguisolicitud.component';
import { CatSolicitudComponent } from '../catalogos/cat-solicitud/cat-solicitud.component';
import { CatSolidiomaComponent } from '../catalogos/cat-solidioma/cat-solidioma.component';
import { CatSolpercepcionesComponent } from '../catalogos/cat-solpercepciones/cat-solpercepciones.component';
import { CatTipvacanteComponent } from '../catalogos/cat-tipvacante/cat-tipvacante.component';
import { CatUsuarioComponent } from '../catalogos/cat-usuario/cat-usuario.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public catalogos: Array<{path: string, component: any, titulo: string }>;

  constructor() {
    this.catalogos = [
      {path: 'Area', component: CatAreaComponent, titulo: 'Area' },
      {path: 'Candidato', component: CatCandidatoComponent, titulo: 'Candidato' },
      {path: 'Cliente', component: CatClienteComponent, titulo: 'Cliente' },
      {path: 'Competencia-candidato', component: CatCompcandidatoComponent, titulo: 'Competencia Candidato' },
      {path: 'Habilidades', component: CatComphabilidadesComponent, titulo: 'Habilidades' },
      {path: 'Conocimiento-solicitado', component: CatConsolicitadoComponent, titulo: 'Conocimiento Solicitado' },
      {path: 'Contacto-cliente', component: CatContactclienteComponent, titulo: 'Contacto Cliente' },
      {path: 'Contacto', component: CatContactoComponent, titulo: 'Contacto' },
      {path: 'Conocimiento-tecnico-candidato', component: CatConteccandidatoComponent, titulo: 'Conocimiento Candidato' },
      {path: 'Conocimientos-tecnicos', component: CatContecnicosComponent, titulo: 'Conocimientos Técnicos' },
      {path: 'Documento-candidato', component: CatDoccandidatoComponent, titulo: 'Documento Candidato' },
      {path: 'Documentos', component: CatDocumentosComponent, titulo: 'Documentos' },
      {path: 'Entrevista', component: CatEntrevistaComponent, titulo: 'Entrevista' },
      {path: 'Equipo', component: CatEquipoComponent, titulo: 'Equipo' },
      {path: 'Equipo-solicitud', component: CatEquipsolComponent, titulo: 'Equipo Solicitud' },
      {path: 'Estatus-candidato', component: CatEstacandidatoComponent, titulo: 'Estatus Candidato' },
      {path: 'Estatus-solicitud', component: CatEstasolicitudComponent, titulo: 'Estatus solicitud' },
      {path: 'Funciones', component: CatFuncionesComponent, titulo: 'Funciones' },
      {path: 'Habilidad-solicitada', component: CatHabsolicitudComponent, titulo: 'Habilidad Solicitada' },
      {path: 'Idioma', component: CatIdiomaComponent, titulo: 'Idioma' },
      {path: 'Idioma-candidato', component: CatIdiomacandidatoComponent, titulo: 'Idioma Candidato' },
      {path: 'Jornada-laboral', component: CatJornadalabComponent, titulo: 'Jornada Laboral' },
      {path: 'Percepcion-candidato', component: CatPercepcioncndaComponent, titulo: 'Percepción Candidato' },
      {path: 'Percepcion-candidato-fr', component: CatPercepcioncndofrComponent, titulo: 'Percepción Candidato fr' },
      {path: 'Perfil', component: CatPerfilComponent, titulo: 'Perfíl' },
      {path: 'Pre-percepcion', component: CatPrepercepcionComponent, titulo: 'Prepercepción' },
      {path: 'Prioridad', component: CatPrioridadComponent, titulo: 'Prioridad' },
      {path: 'Proyecto', component: CatProyectoComponent, titulo: 'Proyecto' },
      {path: 'Seguimiento-candidato', component: CatSeguicandidatoComponent, titulo: 'Seguimiento Candidato' },
      {path: 'Seguimiento-solicitud', component: CatSeguisolicitudComponent, titulo: 'Seguimiento Solicitud' },
      {path: 'Solicitud', component: CatSolicitudComponent, titulo: 'Solicitud' },
      {path: 'Idioma-solicitud', component: CatSolidiomaComponent, titulo: 'Idioma Solicitud' },
      {path: 'Solicitud-percepciones', component: CatSolpercepcionesComponent, titulo: 'Solicitud Percepciones' },
      {path: 'Tipo-vacante', component: CatTipvacanteComponent, titulo: 'Tipo Vacante' },
      {path: 'Usuarios', component: CatUsuarioComponent, titulo: 'Usuarios' }
    ];
  }

ngOnInit() {
}

}
