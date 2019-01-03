import { Catcandidato } from './catcandidato.model';
import { Catestacandidato } from './catestacandidato.model';
import { Catusuario } from './catusuario.model';

export interface Catseguicandidato {

secIdseguimientocandidato: number;
cndDatoscandidato: Catcandidato;
escEstatusCandidato: Catestacandidato;
usrUsuario: Catusuario;
// secEstatus: string;
secComentario: string;
// secActivo: string;
}
