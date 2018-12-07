import { Catsolicitud } from './catsolicitud.model';
import { Catprepercepcion } from './catprepercepcion.model';

export interface SlpSolPercepciones {
  slpIdpercepciones: number;
  prePercepciones: Catprepercepcion;
  solSolicitud: Catsolicitud;
  slpValorm: number;
  slpDescripcion: string;
}
