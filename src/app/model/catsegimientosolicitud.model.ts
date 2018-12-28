import { Catestasolicitud } from './catestasolicitud.model';
import { Catsolicitud } from './catsolicitud.model';
import { Catusuario } from './catusuario.model';

export interface CatSeguimientoSol {
  sgsIdseguimientosol: number;
  sgsFecha: string;
  estEstatusSolicitud: Catestasolicitud;
  solSolicitud: Catsolicitud;
  usrUsuario: Catusuario;
  sgsComentario: string;
}
