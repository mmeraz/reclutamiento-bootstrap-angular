import { Catcontactcliente} from './catcontactcliente.model';
export interface Catcliente {
  cliIdcliente: number;
  cliNombre: string;
  cliRazonsocial: string;
  contactcliente: Catcontactcliente[];
}
