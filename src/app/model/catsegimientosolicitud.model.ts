import { Catestasolicitud } from './catestasolicitud.model';
import { Catsolicitud } from './catsolicitud.model';
import { Catusuario } from './catusuario.model';

export interface CatSeguimientoSol {
  sgsIdseguimientosol: number;
  estEstatusSolicitud: Catestasolicitud;
  solSolicitud: Catsolicitud;
  usrUsuario: Catusuario;
}
