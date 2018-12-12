import { Catcandidato } from './catcandidato.model';
import { Catcontecnicos } from './catcontecnicos.model';

export interface CatConTecCandidato {
cocIdconteccandidato: number;
cndDatoscandidato: Catcandidato ;
cotConocimientosTec: Catcontecnicos;
cocNivel: string;

}
