import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatIdiomaCandidato } from '../../model/catidiomacandidato.model';
import { CatConTecCandidato } from '../../model/catconteccandidato.model';
import { Catcompcandidato } from '../../model/catcompcandidato.model';
import { Catpercepcioncndofr } from '../../model/catpercepcioncndofr.model';
import { Catpercepcioncnda } from '../../model/catpercepcioncnda.model';
import { CatContactoCandidato } from '../../model/catcontactocandidato';
import { Catprepercepcion } from '../../model/catprepercepcion.model';
import { Catcomphabilidades } from '../../model/catcomphabilidades.model';
import { Catcontecnicos } from '../../model/catcontecnicos.model';
import { Catidioma } from '../../model/catidioma.model';
import { CandidatoService } from '../../service/cat.candidato.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrePercepcionService } from '../../service/cat.prepercepcion.service';
import { CompHabilidadesService } from '../../service/cat.comphabilidades.service';
import { ConTecnicosService } from '../../service/cat.contecnicos.service';
import { ContactoCandService } from '../../service/catcontactcand.service';
import { IdiomaService } from '../../service/cat.idioma.service';
import { Catsolicitud } from '../../model/catsolicitud.model';
import { Catcandidato } from '../../model/catcandidato.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-candidato',
  templateUrl: './edit-candidato.component.html',
  styles: []
})
export class EditCandidatoComponent implements OnInit {
    // a mandar al back
    editForm: FormGroup;
    candidato: Catcandidato;

  // Información para los select
  allPercepciones: Catprepercepcion[];
  allIdiomas: Catidioma[];
  allConTecnicos: Catcontecnicos[];
  allHabilidades: Catcomphabilidades[];
  allSolicitudes: Catsolicitud[];



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
idiomaCnda: CatIdiomaCandidato ;
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
// Entrevista: Catentrevista[];

// listas del candidato (relaciones)
contactosCandidato: CatContactoCandidato[] = [];
listaPercepcionOfr: Catpercepcioncndofr[] = [];
listaPercepcionCnda: Catpercepcioncnda[] = [];
listaIdiomas: CatIdiomaCandidato[] = [];
listaContactos: CatContactoCandidato[] = [];
listaConocimientos: CatConTecCandidato[] = [];
listaHabilidades: Catcompcandidato[] = [];

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
               private bs: CandidatoService,
               private route: ActivatedRoute,
               private router: Router) {

              }

  ngOnInit() {
    this.idiomaService.getIdiomas().subscribe((data: Catidioma[]) => this.allIdiomas = data);
    this.conocimientoService.getContecnicos().subscribe((data: Catcontecnicos[]) => this.allConTecnicos = data);
    this.habilidadesService.getCompHabilidades().subscribe((data: Catcomphabilidades[]) => this.allHabilidades = data);
    this.prePercepcionService.getPercepciones().subscribe((data: Catprepercepcion[]) => this.allPercepciones = data);
    this.contactoService.getContactos().subscribe((data: CatContactoCandidato[]) => this.contactosCandidato = data);
    this.route.params.subscribe(params  => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.candidato = res;
        console.log(res.cndEstado);
      });
    });
  }

  /**
   * Método para editar al candidato.
   */
  updateBusiness() {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(this.candidato, params['id']);
       this.router.navigate(['/Candidato']);
       swal({
        position: 'top',
        type: 'success',
        title: `Candidato modificado con éxito!!`,
        showConfirmButton: false,
        timer: 1500
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
    this.listaIdiomas.push(this.idiomaCnda);
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
    this.contactosCandidato.push(this.contactoCandidato);
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
    this.listaConocimientos.push(this.conCand);
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
    this.listaHabilidades.push(this.habCand);
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
    this.listaPercepcionCnda.push(this.percepcionesCnda);
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
    this.listaPercepcionOfr.push(this.Percepcionesfr);
    this.percepcion = null;
    this.valorPer = null;
    this.descripcionPer = null;
  }

  /**
   * Eliminación del contacto de la lista
   * @param item contacto a eliminar
   */
  deleteContacto(item: CatContactoCandidato) {
    this.index = this.contactosCandidato.indexOf(item);
    this.contactosCandidato.splice(this.index, 1);
    this.index = null;
  }
  /**
   * Eliminación de la percepcion de la lista
   * @param item percepcion a eliminar
   */
  deletePercepcionCnda(item: Catpercepcioncnda) {
    this.index = this.listaPercepcionCnda.indexOf(item);
    this.listaPercepcionCnda.splice(this.index, 1);
    this.index = null;
  }

  /**
   * Eliminación de la percepcion de la lista
   * @param item percepcion a eliminar
   */
  deletePercepcionOfr(item: Catpercepcioncndofr) {
    this.index = this.listaPercepcionOfr.indexOf(item);
    this.listaPercepcionOfr.splice(this.index, 1);
    this.index = null;
  }
    /**
   * Eliminación de la lista de idioma
   * @param item CatsolIdioma
   */
  deleteIdioma(item: CatIdiomaCandidato) {
    this.index = this.listaIdiomas.indexOf(item);
    this.listaIdiomas.splice(this.index, 1);
    this.index = null;
  }
  /**
   * metodo para eliminar conocimiento
   * @param item Catconosolicitado
   */
  deleteConocimiento(item: CatConTecCandidato) {
    this.index = this.listaConocimientos.indexOf(item);
    this.listaConocimientos.splice(this.index, 1);
    this.index = null;
  }
  /**
   * metodo para eliminar habilidades
   * @param item a eliminar
   */
  deleteHabilidades(item: Catcompcandidato) {
    this.index = this.listaHabilidades.indexOf(item);
    this.listaHabilidades.splice(this.index, 1);
    this.index = null;
  }

}
