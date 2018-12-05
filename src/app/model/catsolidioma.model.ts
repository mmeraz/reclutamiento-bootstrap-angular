import { Catidioma } from './catidioma.model';
import { Catsolicitud } from './catsolicitud.model';

export interface Catsolidioma {
  id: number;
  idiIdioma: Catidioma;
  solSolicitud: Catsolicitud;
  sliNivel: string;
}
