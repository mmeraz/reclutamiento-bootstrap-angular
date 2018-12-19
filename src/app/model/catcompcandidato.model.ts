import { Catcomphabilidades } from './catcomphabilidades.model';
import { Catcandidato } from './catcandidato.model';
export interface Catcompcandidato {
  chcIdcomcandidato: number;
  cndDatoscandidato: Catcandidato;
  cohCompetenciashabilidades: Catcomphabilidades;
  chcNivel: string;
}

