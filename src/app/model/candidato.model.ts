import { Catpercepcioncnda } from './catpercepcioncnda.model';
import { CatIdiomaCandidato } from './catidiomacandidato.model';
import { Catpercepcioncndofr } from './catpercepcioncndofr.model';
import { CatContactoCandidato } from './catcontactocandidato';
import { Catentrevista } from './catentrevista.model';
import { Catcontecnicos } from './catcontecnicos.model';
import { Catcomphabilidades } from './catcomphabilidades.model';

export interface Candidato {

  cndIdcandidato: number;
  cndNombre: string;
  cndApellidopat: string;
  cndApellidomat: string;
  cndCalle: string;
  cndNumext: string;
  cndNumint: string;
  cndCodPostal: string;
  cndEstcivil: string;
  cndEmail: string;
  cndHijos: boolean;
  cndDispoViajar: boolean;
  cndVisa: boolean;
  cndPasaporte: boolean;
  cndTrabaja: boolean;
  cndDisponibilidad: string;
  cndDispotrabajo: string;
  cndGenero: string;
  Percecpciones: Catpercepcioncnda[];
  Idiomas: CatIdiomaCandidato[];
  Percepcionsfr: Catpercepcioncndofr[];
  Contacto: CatContactoCandidato[];
  // Entrevista: Catentrevista[];
  Conocimientos: Catcontecnicos[];
  Habilidades: Catcomphabilidades[];
}
