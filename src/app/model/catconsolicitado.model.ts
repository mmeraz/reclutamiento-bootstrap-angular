import { Catsolicitud } from './catsolicitud.model';
import { Catcontecnicos } from './catcontecnicos.model';

export interface Catconsolicitado {
  id: number;
  cotConocimientosTec: Catcontecnicos;
  solSolicitud: Catsolicitud;
  socNivel: string ;
}
