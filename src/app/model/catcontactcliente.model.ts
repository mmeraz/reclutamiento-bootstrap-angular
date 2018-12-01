import { Catcliente } from "./catcliente.model";

export interface Catcontactcliente {
  clcIdconcli: number;
  cliCliente: Catcliente;
  clcNombre: string;
  clcTelefono: string;
  clcEmail: string;
  clcTipo: string;
  clcExtension: string;
}
