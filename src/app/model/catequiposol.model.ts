import { Catequipo } from './catequipo.model';
import { Catsolicitud } from './catsolicitud.model';

export interface Catequiposol {
  eslIdequiposol: number;
  equEquipo: Catequipo;
  solSolicitud: Catsolicitud;
}
