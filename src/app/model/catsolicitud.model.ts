import { Catarea } from './catarea.model';
import { Catcliente } from './catcliente.model';
import { Catjornadalab } from './catjornadalab.model';
import { Catperfil } from './catperfil.model';
import { Catprioridad } from './catprioridad.model';
import { Catproyecto } from './catproyecto.model';
import { Catusuario } from './catusuario.model';
import { Catfunciones } from './catfunciones.model';
import { Catequiposol } from './catequiposol.model';
import { Catconsolicitado } from './catconsolicitado.model';
import { Catsolidioma } from './catsolidioma.model';
import { Cathabsol } from './cathabsol.model';

export interface Catsolicitud {
  arnAreanegocio: Catarea;
  cliCliente: Catcliente;
  jolJornadalaboral: Catjornadalab;
  perPerfil: Catperfil;
  priPrioridad: Catprioridad;
  proProyecto: Catproyecto;
  usrUsuarioBySolIdreclutador: Catusuario;
  usrUsuarioBySolIdcomercial: Catusuario;
  solFolio: number;
  solExistepresupuesto: '';
  solNovacantes: number;
  solTarifacomercial: number;
  solGenero: '';
  solEscolaridad: '';
  solEdadincial: number;
  solEdadfinal: number;
  cndCalle: '';
  solNumextent: number;
  solNumintent: '';
  solCodpostalent: '';
  solMunicipioent: '';
  solEstadoent: '';
  solLugarasignacion: '';
  solExperienciainicial: '';
  funciones: Catfunciones[];
  equipos: Catequiposol[];
  conocimientos: Catconsolicitado[];
  usrUsuario: Catusuario; // ver como recuperarlo desde el head
  idiomas: Catsolidioma[];
  habilidades: Cathabsol[];
}
