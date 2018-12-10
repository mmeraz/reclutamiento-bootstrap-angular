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
import { CatTipoVacante } from './cattipovacante.model';
import { SlpSolPercepciones } from './catsolpercepcion.model';

export interface Catsolicitud {
  solIdsolicitud: number;
  arnAreanegocio: Catarea;
  cliCliente: Catcliente;
  jolJornadalaboral: Catjornadalab;
  perPerfil: Catperfil;
  priPrioridad: Catprioridad;
  proProyecto: Catproyecto;
  tvaTipoVacante: CatTipoVacante;
  usrUsuarioBySolIdreclutador: Catusuario;
  usrUsuarioBySolIdcomercial: Catusuario;
  solFolio: number;
  solExistepresupuesto: string;
  solNovacantes: number;
  solTarifacomercial: number;
  solGenero: string;
  solEscolaridad: string;
  solEdadincial: number;
  solEdadfinal: number;
  cndCalle: string;
  solNumextent: number;
  solNumintent: string;
  solCodpostalent: string;
  solMunicipioent: string;
  solEstadoent: string;
  solLugarasignacion: string;
  solExperienciainicial: string;
  funciones: Catfunciones[];
  equipos: Catequiposol[];
  conocimientos: Catconsolicitado[];
  idiomas: Catsolidioma[];
  habilidades: Cathabsol[];
  percepsiones: SlpSolPercepciones[];
}
