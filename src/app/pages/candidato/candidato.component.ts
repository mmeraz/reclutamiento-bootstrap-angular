import { Component, OnInit } from '@angular/core';
import { Catpercepcioncnda } from '../../model/catpercepcioncnda.model';
import { Catpercepcioncndofr } from '../../model/catpercepcioncndofr.model';
import { Catidioma } from '../../model/catidioma.model';
import { Catidiomacandidato } from '../../model/catidiomacandidato.model';
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

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {

  // Información para los select
  allPercepciones: Catpercepcioncnda[];
  allPercepOfr: Catpercepcioncndofr[];
  allIdiomas: Catidioma[];
  allIdiomasCan: Catidiomacandidato[];
  allConTecnicos: Catcontecnicos[];
  allConHabilidades: Catcomphabilidades[];

  // Campos para llenar la solicitud de candidato
  contactoCan: CatContactoCandidato;
  candidato: Catcandidato;
//   cndIdcandidato: number;
// cndNombre: string;
// cndApellidopat: string;
// cndApellidomat: string;
// cndCalle: string;
// cndNumext: string;
// cndNumint: string;
// cndCodPostal: string;
// cndEstcivil: string;
// cndEmail: string;
// cndHijos: boolean;
// cndDispoViajar: boolean;
// cndVisa: boolean;
// cndPasaporte: boolean;
// cndTrabaja: boolean;
// cndDisponibilidad: string;
// cndDispotrabajo: string;
// cndGenero: string;
// Percecpciones: Catpercepcioncnda[];
// Idiomas: Catidiomacandidato[];
// Percepcionsfr: Catpercepcioncndofr[];
// Contacto: CatContactoCandidato[];
// Entrevista: Catentrevista[];
// Conocimientos: Catcontecnicos[];
// Habilidades: Catcomphabilidades[];

// listas del candidato (relaciones)
listaPercepciones: Catpercepcioncnda[] = [];
listaIdiomas: Catidiomacandidato[] = [];
listaContactos: CatContactoCandidato[] = [];
listaConocimientos: Catcontecnicos[] = [];
listaHabilidades: Catcompcandidato[] = [];

/**
 * Constructor de la clase inicializando servicios
 */
  constructor( private percepcionService: PercepcioncndaService,
               private idiomaService: IdiomaService,
               private contactoService: ContactoCandService,
               private conocimientoService: ConTecnicosService,
               private habilidadesService: CompHabilidadesService) { }

  ngOnInit() {
    this.percepcionService.getPercepciones().subscribe((data: Catpercepcioncnda[]) => this.allPercepciones = data);
    this.idiomaService.getIdiomas().subscribe((data: Catidioma[]) => this.allIdiomas = data);
    this.conocimientoService.getContecnicos().subscribe((data: Catcontecnicos[]) => this.allConTecnicos = data);
    this.percepcionService.getPercepciones().subscribe((data: Catpercepcioncnda[]) => this.allPercepciones = data);
  }

}
