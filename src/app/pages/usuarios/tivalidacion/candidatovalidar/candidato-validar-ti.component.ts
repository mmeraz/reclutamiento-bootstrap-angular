import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import swal from 'sweetalert2';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Catcandidato } from '../../../../model/catcandidato.model';
import { Catprepercepcion } from '../../../../model/catprepercepcion.model';
import { Catidioma } from '../../../../model/catidioma.model';
import { Catcontecnicos } from '../../../../model/catcontecnicos.model';
import { Catcomphabilidades } from '../../../../model/catcomphabilidades.model';
import { Catsolicitud } from '../../../../model/catsolicitud.model';
import { CatContactoCandidato } from '../../../../model/catcontactocandidato';
import { CatIdiomaCandidato } from '../../../../model/catidiomacandidato.model';
import { Catpercepcioncndofr } from '../../../../model/catpercepcioncndofr.model';
import { Catpercepcioncnda } from '../../../../model/catpercepcioncnda.model';
import { Catcompcandidato } from '../../../../model/catcompcandidato.model';
import { CatConTecCandidato } from '../../../../model/catconteccandidato.model';
import { IdiomaService } from '../../../../service/cat.idioma.service';
import { ContactoCandService } from '../../../../service/catcontactcand.service';
import { ConTecnicosService } from '../../../../service/cat.contecnicos.service';
import { CompHabilidadesService } from '../../../../service/cat.comphabilidades.service';
import { PrePercepcionService } from '../../../../service/cat.prepercepcion.service';
import { CandidatoService } from '../../../../service/cat.candidato.service';
import { SeguimientoCandService } from '../../../../service/seguimientocandidato.service';
import { Catseguicandidato } from '../../../../model/catseguicandidato.model';
import { Catusuario } from '../../../../model/catusuario.model';
import { UsuarioService } from '../../../../service/cat.usuario.service';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';
import { SeguiSolicitudService } from 'src/app/service/cat.seguisolicitud.service';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { EntrevistaService } from 'src/app/service/cat.entrevista.service';
import { Catentrevista } from 'src/app/model/catentrevista.model';
import { AuthService } from 'src/app/service/auth.service';
import { MailService } from 'src/app/service/mail.service';

@Component({
  selector: 'app-candidato-validar-ti',
  templateUrl: './candidato-validar-ti.component.html',
  styles: []
})
export class CandidatoValidarTiComponent implements OnInit {
    // a mandar al back
    editForm: FormGroup;
    candidato: Catcandidato;
    seguimiento: Catseguicandidato;
    entrevista: Catentrevista;

  // Información para los select
  allPercepciones: Catprepercepcion[];
  allIdiomas: Catidioma[];
  allConTecnicos: Catcontecnicos[];
  allHabilidades: Catcomphabilidades[];
  allSolicitudes: Catsolicitud[];
  allContactos: CatContactoCandidato[];



// Propiedas para llenar la solicitud del candidato
index: number;
cndIdcandidato: number;
contactoCan: CatContactoCandidato;
cndNombre: string;
cndApellidopat: string;
cndApellidomat: string;
cndEdad: number;
cndCalle: string;
cndNumext: string;
cndNumint: string;
cndCodPostal: string;
cndEstcivil: string;
cndEmail: string;
cndHijos: boolean;
cndDispoViajar: boolean;
cndConocimiento: Catcontecnicos;
contactoCandidato: CatContactoCandidato;
cndVisa: boolean;
cndPasaporte: boolean;
cndTrabaja: boolean;
cndDisponibilidad: string;
cndDispotrabajo: string;
cndGenero: string;
Idioma: Catidioma ;
idiomaCnda: CatIdiomaCandidato;
Percepcionesfr: Catpercepcioncndofr;
percepcionesCnda: Catpercepcioncnda;
percepcion: Catprepercepcion;
nvPercepcion: string;
nvPercepcionOfr: string;
nvIdioma: string;
nvCono: string;
nvHab: string;
valorPer: number;
valorPerOfr: number;
valorPerCnda: number;
descripcionPer: string;
descripcionPerOfr: string;
descripcionPerCnda: string;
compCand: Catcompcandidato;
conCand: CatConTecCandidato;
habCand: Catcompcandidato;
habilidad: Catcomphabilidades;
contacto: CatContactoCandidato;
conocimiento: Catcontecnicos;
solicitud: Catsolicitud;
conIdcontacto: number;
conTelMovil: string;
secComentario: string;
user: Catusuario;
// Entrevista: Catentrevista[];



/**
 * Propiedadformulario para validaciones
*/

/**
 * Constructor de la clase inicializando servicios
 */
  constructor( private idiomaService: IdiomaService,
               private contactoService: ContactoCandService,
               private conocimientoService: ConTecnicosService,
               private habilidadesService: CompHabilidadesService,
               private prePercepcionService: PrePercepcionService,
               private fb: FormBuilder,
               private bs: EntrevistaService,
               private bsC: CandidatoService,
               private bsSeg: SeguimientoCandService,
               private route: ActivatedRoute,
               private userService: UsuarioService,
               private solService: SeguimientoSolService,
               private auth: AuthService, private serviceMail: MailService,
               private router: Router) {

              }

  ngOnInit() {
    this.idiomaService.getIdiomas().subscribe((data: Catidioma[]) => this.allIdiomas = data);
    this.conocimientoService.getContecnicos().subscribe((data: Catcontecnicos[]) => this.allConTecnicos = data);
    this.habilidadesService.getCompHabilidades().subscribe((data: Catcomphabilidades[]) => this.allHabilidades = data);
    this.prePercepcionService.getPercepciones().subscribe((data: Catprepercepcion[]) => this.allPercepciones = data);
    this.contactoService.getContactos().subscribe((data: CatContactoCandidato[]) => this.allContactos = data);
    this.solService.getSgsSeguimientoAsignada().subscribe((data: Catsolicitud[]) => this.allSolicitudes = data);
    this.route.params.subscribe(params  => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.entrevista = res;
        this.candidato = this.entrevista.cndDatoscandidato;
        console.log(res.cndDatoscandidato.cndIdcandidato);
      });
    });
  }

  /**
   * Método para validar al candidato.
   */
  updateBusiness() {
    this.route.params.subscribe(params => {
      this.candidato.usuario = this.user;
      this.bsC.updateBusiness(this.candidato, this.candidato.cndIdcandidato);
      this.bsSeg.addValidar(this.candidato, this.secComentario);
      this.serviceMail.sendEmail('5', this.candidato);
      this.router.navigate(['/IndexTiValidacion']);
       swal({
        position: 'top',
        type: 'success',
        title: `¡¡Solicitud Validada con éxito!!`,
        showConfirmButton: false,
        timer: 2500
      });
    });
    this.update();
 }

 updateRechazada() {
  this.route.params.subscribe(params => {
    this.bsSeg.addRechazado(this.candidato, this.secComentario);
    this.serviceMail.sendEmail('8', this.candidato);
    this.router.navigate(['/IndexTiValidacion']);
     swal({
      position: 'top',
      type: 'error',
      title: `¡¡Candidato Rechazado!!`,
      showConfirmButton: false,
      timer: 2500
    });
  });
  this.update();
}

 update(): void {
  window.location.reload();
 }


    /**
   * Metodo para agregar el idioma a la solicitud;
   */
  addIdioma() {
    this.idiomaCnda = {
  idcIdidiomacandidato: null,
  cndDatoscandidato: null,
  idiIdioma: this.Idioma,
  idcNivel: this.nvIdioma
    };
    this.candidato.idcIdiomaCandidatos.push(this.idiomaCnda);
    this.Idioma = null;
    this.nvIdioma = null;
  }

    /**
   * Metodo para agregar el contacto al candidato
   */
  addContacto() {
    this.contactoCandidato = {
      conIdcontacto: this.conIdcontacto,
      cndDatoscandidato: null,
      conTelmovil: this.conTelMovil
    };
    this.candidato.conContactocans.push(this.contactoCandidato);
    this.contactoCandidato = null;
  }


  /**
   * Metodo para agregar conocimiento al candidato
   */
  addConocimiento() {
    this.conCand = {
      cocIdconteccandidato: null,
      cndDatoscandidato: null,
      cotConocimientosTec: this.conocimiento,
      cocNivel: this.nvCono
    };
    this.candidato.cocConTecCandidatos.push(this.conCand);
    this.conocimiento = null;
    this.nvCono = null;
  }

    /**
   * Metodo para agregar habilidad al candidato
   */
  addHabilidad() {
    this.habCand = {
      chcIdcomcandidato: null,
      cndDatoscandidato: null,
      cohCompetenciashabilidades: this.habilidad,
      chcNivel: this.nvHab
    };
    this.candidato.chcComcandidatos.push(this.habCand);
    this.habilidad = null;
    this.nvHab = null;
  }



  /**
   * Metodo para agregar percepciones candidato a la solicitud;
   */
  addPercepcionCnda() {
    this.percepcionesCnda = {
      pcaIdpercepcionescnda: null,
      cndDatoscandidato: null,
      prePercepciones: this.percepcion,
      pcaValor: this.valorPerCnda,
      pcaDescripcion: this.descripcionPerCnda
    };
    this.candidato.pcaPercepcionescndas.push(this.percepcionesCnda);
    this.percepcion = null;
    this.valorPer = null;
    this.descripcionPer = null;
  }

    /**
   * Metodo para agregar percepciones ofrecidas por la solicitud;
   */
  addPercepcionOfr() {
    this.Percepcionesfr = {
      pcaIdpercepcionescndofr: null,
      cndDatoscandidato: null,
      prePercepciones: this.percepcion,
      pcoValor: this.valorPerOfr,
      pcoDescripcion: this.descripcionPerOfr
    };
    this.candidato.pcaPercepcionescndofrs.push(this.Percepcionesfr);
    this.percepcion = null;
    this.valorPer = null;
    this.descripcionPer = null;
  }

  /**
   * Eliminación del contacto de la lista
   * @param item contacto a eliminar
   */
  deleteContacto(item: CatContactoCandidato) {
    this.index = this.candidato.conContactocans.indexOf(item);
    this.candidato.conContactocans.splice(this.index, 1);
    this.index = null;
  }
  /**
   * Eliminación de la percepcion de la lista
   * @param item percepcion a eliminar
   */
  deletePercepcionCnda(item: Catpercepcioncnda) {
    this.index = this.candidato.pcaPercepcionescndas.indexOf(item);
    this.candidato.pcaPercepcionescndas.splice(this.index, 1);
    this.index = null;
  }

  /**
   * Eliminación de la percepcion de la lista
   * @param item percepcion a eliminar
   */
  deletePercepcionOfr(item: Catpercepcioncndofr) {
    this.index = this.candidato.pcaPercepcionescndofrs.indexOf(item);
    this.candidato.pcaPercepcionescndofrs.splice(this.index, 1);
    this.index = null;
  }
    /**
   * Eliminación de la lista de idioma
   * @param item CatsolIdioma
   */
  deleteIdioma(item: CatIdiomaCandidato) {
    this.index = this.candidato.idcIdiomaCandidatos.indexOf(item);
    this.candidato.idcIdiomaCandidatos.splice(this.index, 1);
    this.index = null;
  }
  /**
   * metodo para eliminar conocimiento
   * @param item Catconosolicitado
   */
  deleteConocimiento(item: CatConTecCandidato) {
    this.index = this.candidato.cocConTecCandidatos.indexOf(item);
    this.candidato.cocConTecCandidatos.splice(this.index, 1);
    this.index = null;
  }
  /**
   * metodo para eliminar habilidades
   * @param item a eliminar
   */
  deleteHabilidades(item: Catcompcandidato) {
    this.index = this.candidato.chcComcandidatos.indexOf(item);
    this.candidato.chcComcandidatos.splice(this.index, 1);
    this.index = null;
  }

}
