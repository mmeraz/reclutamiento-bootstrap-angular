import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

import { CatAreaComponent } from '../catalogos/cat-area/cat-area.component';
import { CatCandidatoComponent } from '../catalogos/cat-candidato/cat-candidato.component';
import { CatClienteComponent } from '../catalogos/cat-cliente/cat-cliente.component';
import { CatComphabilidadesComponent } from '../catalogos/cat-comphabilidades/cat-comphabilidades.component';
import { CatContactclienteComponent } from '../catalogos/cat-contactcliente/cat-contactcliente.component';
import { CatContecnicosComponent } from '../catalogos/cat-contecnicos/cat-contecnicos.component';
import { CatDoccandidatoComponent } from '../catalogos/cat-doccandidato/cat-doccandidato.component';
import { CatDocumentosComponent } from '../catalogos/cat-documentos/cat-documentos.component';
import { CatEntrevistaComponent } from '../catalogos/cat-entrevista/cat-entrevista.component';
import { CatEquipoComponent } from '../catalogos/cat-equipo/cat-equipo.component';
import { CatEstacandidatoComponent } from '../catalogos/cat-estacandidato/cat-estacandidato.component';
import { CatEstasolicitudComponent } from '../catalogos/cat-estasolicitud/cat-estasolicitud.component';
import { CatIdiomaComponent } from '../catalogos/cat-idioma/cat-idioma.component';
import { CatJornadalabComponent } from '../catalogos/cat-jornadalab/cat-jornadalab.component';
import { CatPerfilComponent } from '../catalogos/cat-perfil/cat-perfil.component';
import { CatPrepercepcionComponent } from '../catalogos/cat-prepercepcion/cat-prepercepcion.component';
import { CatPrioridadComponent } from '../catalogos/cat-prioridad/cat-prioridad.component';
import { CatSeguicandidatoComponent } from '../catalogos/cat-seguicandidato/cat-seguicandidato.component';
import { CatSeguisolicitudComponent } from '../catalogos/cat-seguisolicitud/cat-seguisolicitud.component';
import { CatSolicitudComponent } from '../catalogos/cat-solicitud/cat-solicitud.component';
import { CatTipvacanteComponent } from '../catalogos/cat-tipvacante/cat-tipvacante.component';
import { CatUsuarioComponent } from '../catalogos/cat-usuario/cat-usuario.component';
import { UsuarioService } from 'src/app/service/cat.usuario.service';
import { Catusuario } from 'src/app/model/catusuario.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  user$;
  public catalogos: Array<{path: string, component: any, titulo: string }>;

  constructor(protected authService: AuthService) {
    this.catalogos = [
      {path: 'Area', component: CatAreaComponent, titulo: 'Area' },
      {path: 'Candidato', component: CatCandidatoComponent, titulo: 'Candidato' },
      {path: 'Cliente', component: CatClienteComponent, titulo: 'Cliente' },
      {path: 'Habilidades', component: CatComphabilidadesComponent, titulo: 'Habilidades' },
      {path: 'Contacto-cliente', component: CatContactclienteComponent, titulo: 'Contacto Cliente' },
      {path: 'Conocimientos-tecnicos', component: CatContecnicosComponent, titulo: 'Conocimientos Técnicos' },
      {path: 'Documento-candidato', component: CatDoccandidatoComponent, titulo: 'Documento Candidato' },
      {path: 'Documentos', component: CatDocumentosComponent, titulo: 'Documentos' },
      {path: 'Entrevista', component: CatEntrevistaComponent, titulo: 'Entrevista' },
      {path: 'Equipo', component: CatEquipoComponent, titulo: 'Equipo' },
      {path: 'Estatus-candidato', component: CatEstacandidatoComponent, titulo: 'Estatus Candidato' },
      {path: 'Estatus-solicitud', component: CatEstasolicitudComponent, titulo: 'Estatus solicitud' },
      {path: 'Idioma', component: CatIdiomaComponent, titulo: 'Idioma' },
      {path: 'Jornada-laboral', component: CatJornadalabComponent, titulo: 'Jornada Laboral' },
      {path: 'Perfil', component: CatPerfilComponent, titulo: 'Perfíl' },
      {path: 'Pre-percepcion', component: CatPrepercepcionComponent, titulo: 'Prepercepción' },
      {path: 'Prioridad', component: CatPrioridadComponent, titulo: 'Prioridad' },
      {path: 'Seguimiento-candidato', component: CatSeguicandidatoComponent, titulo: 'Seguimiento Candidato' },
      {path: 'Seguimiento-solicitud', component: CatSeguisolicitudComponent, titulo: 'Seguimiento Solicitud' },
      {path: 'Solicitud', component: CatSolicitudComponent, titulo: 'Solicitud' },
      {path: 'Tipo-vacante', component: CatTipvacanteComponent, titulo: 'Tipo Vacante' },
      {path: 'Usuarios', component: CatUsuarioComponent, titulo: 'Usuarios' }
    ];
  }

ngOnInit() {
    this.user$ = this.authService.usuario;
}

}
