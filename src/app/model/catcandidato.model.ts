import { Catpercepcioncndofr } from './catpercepcioncndofr.model';
import { CatContactoCandidato } from './catcontactocandidato';
import { Catusuario } from './catusuario.model';
import { Catidioma } from './catidioma.model';
import { CatIdiomaCandidato } from './catidiomacandidato.model';
import { Catpercepcioncnda } from './catpercepcioncnda.model';
export interface Catcandidato {

cndIdcandidato: number;
cndNombre: string;
cndApellidopat: string;
cndApellidomat: string;
cndEdad: number;
cndCalle: string;
usrUsuarioByCndIdreclutador: Catusuario;
cndNumext: string;
cndNumint: string;
cndCodPostal: string;
cndEstcivil: string;
cndEmail: string;
cndHijos: boolean;
cndDispoViajar: boolean;
cndVisa: boolean;
cndPasaporte: boolean;
cndTrabaja: boolean;
cndDisponibilidad: string;
cndDispotrabajo: string;
cndGenero: string;
Idioma: CatIdiomaCandidato[];
percepcionesCandidato: Catpercepcioncnda[];
Contacto: CatContactoCandidato[];
}
