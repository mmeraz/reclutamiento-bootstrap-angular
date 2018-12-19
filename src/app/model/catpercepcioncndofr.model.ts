import { Catcandidato } from './catcandidato.model';
import { Catprepercepcion } from './catprepercepcion.model';

export interface Catpercepcioncndofr {

  pcaIdpercepcionescndofr: number;
  cndDatoscandidato: Catcandidato;
  prePercepciones: Catprepercepcion;
  pcoValor: number;
  pcoDescripcion: string;
}
