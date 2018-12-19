import { Catpercepcioncndofr } from './catpercepcioncndofr.model';
import { CatContactoCandidato } from './catcontactocandidato';
import { Catusuario } from './catusuario.model';
import { CatIdiomaCandidato } from './catidiomacandidato.model';
import { Catpercepcioncnda } from './catpercepcioncnda.model';
import { Catcompcandidato } from './catcompcandidato.model';
import { CatConTecCandidato } from './catconteccandidato.model';
import { Catseguicandidato } from './catseguicandidato.model';

export interface Catcandidato {

  cndIdcandidato: number;
  cndNombre: string;
  cndApellidopat: string;
  cndApellidomat: string;
  cndCalle: string;
  cndNumext: string;
  cndNumint: string;
  cndCodpostal: string;
  cndColonia: string;
  cndMunicipio: string;
  cndEstado: string;
  cndPais: string;
  cndEdad: number;
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
  pcaPercepcionescndas: Catpercepcioncnda[];
  idcIdiomaCandidatos: CatIdiomaCandidato[];
  pcaPercepcionescndofrs: Catpercepcioncndofr[];
  conContactocans: CatContactoCandidato[];
  chcComcandidatos: Catcompcandidato[];
  cocConTecCandidatos: CatConTecCandidato[];
}




