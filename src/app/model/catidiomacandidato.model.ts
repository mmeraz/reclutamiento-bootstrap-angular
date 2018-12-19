import { Catidioma } from './catidioma.model';
import { Catcandidato } from './catcandidato.model';

export interface CatIdiomaCandidato {
  idcIdidiomacandidato: number;
  cndDatoscandidato: Catcandidato;
  idiIdioma: Catidioma;
  idcNivel: string;
}
