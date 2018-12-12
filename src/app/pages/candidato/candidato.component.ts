import { Component, OnInit } from '@angular/core';
import { Catpercepcioncnda } from '../../model/catpercepcioncnda.model';
import { Catpercepcioncndofr } from '../../model/catpercepcioncndofr.model';
import { Catidioma } from '../../model/catidioma.model';
import { CatIdiomaCandidato } from '../../model/catidiomacandidato.model';
import { CatContactoCandidato } from '../../model/catcontactocandidato';
import { Catcontecnicos } from '../../model/catcontecnicos.model';
import { Catcomphabilidades } from '../../model/catcomphabilidades.model';
import { Catcandidato } from '../../model/catcandidato.model';
import { Catcompcandidato } from '../../model/catcompcandidato.model';
import { PercepcioncndaService } from '../../service/cat.percepcioncnda.service';
import { IdiomaService } from '../../service/cat.idioma.service';
import { ContactoService } from '../../service/cat.contacto.service';
import { CompCandidatoService } from '../../service/cat.compcandidato.service';
import { CompHabilidadesService } from '../../service/cat.comphabilidades.service';
import { ConTecCandidatoService } from '../../service/cat.conteccandidato.service';
import { ContactoCandService } from '../../service/catcontactcand.service';
import { ConTecnicosService } from '../../service/cat.contecnicos.service';
import { CatConteccandidatoComponent } from '../../catalogos/cat-conteccandidato/cat-conteccandidato.component';
import { PercepciondofrService } from '../../service/cat.percepciondofr.service';
import { FormBuilder, PatternValidator } from '@angular/forms';
import { CandidatoService } from '../../service/cat.candidato.service';
import { CatCompcandidatoComponent } from '../../catalogos/cat-compcandidato/cat-compcandidato.component';
import { CatConTecCandidato } from '../../model/catconteccandidato.model';
import { Catfunciones } from '../../model/catfunciones.model';
import { Catprepercepcion } from '../../model/catprepercepcion.model';
import { Catsolicitud } from '../../model/catsolicitud.model';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  providers: [PercepciondofrService, IdiomaService,
  IdiomaService, ConTecCandidatoService, CompHabilidadesService]
})
export class CandidatoComponent implements OnInit {

    // a mandar al back
    candidato: Catcandidato;

  // Información para los select
  allPercepcion: Catprepercepcion[];
  allPercepciones: Catpercepcioncnda[];
  allPercepOfr: Catpercepcioncndofr[];
  allIdiomas: Catidioma[];
  allIdiomasCan: CatIdiomaCandidato[];
  allConTecnicos: Catcontecnicos[];
  allConHabilidades: Catcompcandidato[];
  allHabilidades: Catcomphabilidades[];
  allSolicitudes: Catsolicitud[];


  // Campos para llenar la solicitud de candidato
  contactoCan: CatContactoCandidato;

 // Datos para llenar la solicitud del candidato
cndIdcandidato: number;
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
conocimiento: Catcontecnicos;
contactoCandidato: CatContactoCandidato = null;
cndVisa: boolean;
cndPasaporte: boolean;
cndTrabaja: boolean;
cndDisponibilidad: string;
cndDispotrabajo: string;
cndGenero: string;
Idioma: Catidioma ;
idiomaCantdidato: CatIdiomaCandidato ;
Percepcionsfr: Catpercepcioncndofr;
percepcionesCandidato: Catpercepcioncnda;
percepcion: Catprepercepcion;
nvPercepcion: string;
nvIdioma: string;
nvCono: string;
nvHab: string;
valorPer: number;
descripcionPer: string;
compCand: Catcompcandidato;
conCand: CatConTecCandidato;
habCand: Catcompcandidato;
habilidad: Catcomphabilidades;
Contacto: CatContactoCandidato;
// Entrevista: Catentrevista[];
Conocimientos: Catcontecnicos;
Habilidades: Catcomphabilidades;
solicitud: Catsolicitud;

// listas del candidato (relaciones)
contactosCandidato: CatContactoCandidato[] = [];
listaPercepciones: Catpercepcioncndofr[] = [];
listaPercepcion: Catpercepcioncnda[] = [];
listaIdiomas: CatIdiomaCandidato[] = [];
listaContactos: CatContactoCandidato[] = [];
listaConocimientos: CatConTecCandidato[] = [];
listaHabilidades: Catcompcandidato[] = [];

/**
 * Constructor de la clase inicializando servicios
 */
  constructor( private idiomaService: IdiomaService,
               private contactoService: ContactoCandService,
               private conocimientoService: ConTecnicosService,
               private habilidadesService: CompHabilidadesService,
               private fb: FormBuilder, private bs: CandidatoService) {
               }

  ngOnInit() {
    this.idiomaService.getIdiomas().subscribe((data: Catidioma[]) => this.allIdiomas = data);
    this.conocimientoService.getContecnicos().subscribe((data: Catcontecnicos[]) => this.allConTecnicos = data);
    this.habilidadesService.getCompHabilidades().subscribe((data: Catcompcandidato[]) => this.allConHabilidades = data);
  }

  /**
   * Método para agregar el candidato
   */
  addCandidato() {
    console.log('Todo terminar métodos');
    this.candidato = {
      cndIdcandidato: null,
      cndNombre: this.cndNombre,
      cndApellidopat: this.cndApellidopat,
      cndApellidomat: this.cndApellidomat,
      cndEdad: this.cndEdad,
      cndCalle: this.cndCalle,
      usrUsuarioByCndIdreclutador: {
        usrUsuario: 1,
        usrUsername: 'reclutador 1',
        usrNombreusuario: 'Omar',
        usrPassword: 'test',
        usrEmail: 'test@test.com',
        usrPerfil: 'O',
        usrTelefono: '0987654321'
      },
      cndNumext: null,
      cndNumint: null,
      cndCodPostal: null,
      cndEstcivil: this.cndEstcivil,
      cndEmail: this.cndEmail,
      cndHijos: this.cndHijos,
      cndDispoViajar: this.cndDispoViajar,
      cndVisa: this.cndVisa,
      cndPasaporte: this.cndPasaporte,
      cndTrabaja: this.cndTrabaja,
      cndDisponibilidad: this.cndDisponibilidad,
      cndDispotrabajo: this.cndDispotrabajo,
      cndGenero: this.cndGenero,
      Idioma: this.listaIdiomas,
      percepcionesCandidato: this.listaPercepcion,
      Contacto: this.listaContactos
    };
    this.bs.addCandidato(this.candidato);
  }

    /**
   * Metodo para agregar el idioma a la solicitud;
   */
  addIdioma() {
    this.idiomaCantdidato = {
      idcIdidiomacandidato: null,
      idcIdioma: this.Idioma,
      idcNivel: this.nvIdioma
    };
    this.listaIdiomas.push(this.idiomaCantdidato);
    this.Idioma = null;
    this.nvIdioma = null;
  }

    /**
   * Metodo para agregar el contacto al candidato
   */
  addContacto() {
    this.contactosCandidato.push(this.contactoCandidato);
    this.contactoCandidato = null;
  }


  /**
   * Metodo para agregar conocimiento al candidato
   */
  addConocimiento() {
    this.conCand = {
      cocIdconteccandidato: null,
      cotConocimientosTec: this.Conocimientos,
      cndDatoscandidato: null,
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
      Catcomphabilidades: this.Habilidades,
      chcNivel: this.nvHab
    };
    this.listaHabilidades.push(this.habCand);
    this.Habilidades = null;
    this.nvHab = null;
  }



  /**
   * Metodo para agregar percepcion a la solicitud;
   */
  // addPercepcion() {
  //   this.percepcionesCandidato = {
  //     pcaIdpercepcionescnda: null,
  //     pcaPercepciones: this.percepcion,
  //     pcaValor: this.valorPer,
  //     pcaDescripcion: this.descripcionPer
  //   };
  //   this.listaPercepciones.push(this.percepcionesCandidato);
  //   this.percepcion = null;
  //   this.valorPer = null;
  //   this.descripcionPer = null;
  // }


}
