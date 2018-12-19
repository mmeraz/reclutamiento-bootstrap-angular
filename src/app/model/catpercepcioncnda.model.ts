import { Catprepercepcion } from './catprepercepcion.model';
import { Catcandidato } from './catcandidato.model';

export interface Catpercepcioncnda {
pcaIdpercepcionescnda: number;
cndDatoscandidato: Catcandidato;
prePercepciones: Catprepercepcion;
pcaValor: number;
pcaDescripcion: string;
}

