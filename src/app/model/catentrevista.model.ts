import { Catcandidato } from './catcandidato.model';
import { Catsolicitud } from './catsolicitud.model';
export interface Catentrevista {

entIdentrevista: number;
cndDatoscandidato: Catcandidato;
solSolicitud: Catsolicitud;
entTiempovivetra: string;
entUltimoTrabajo: string;
}
