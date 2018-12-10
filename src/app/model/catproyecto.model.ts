import { Catcontactcliente } from './catcontactcliente.model';
import { Catcliente } from './catcliente.model';

export interface Catproyecto {
  proIdproyecto: number;
  clcContactoClienteByProIdconclitode: Catcontactcliente;
  clcContactoClienteByProIdconclilid: Catcontactcliente;
  clcContactoClienteByProIdconcligerente: Catcontactcliente;
  cliCliente: Catcliente;
  proNombre: string;
  proDescripcion: string;
  proPuestoarea: string;
  proInicio: Date;
  proObservaciones: string;
  proDuracionmeses: string;
}
