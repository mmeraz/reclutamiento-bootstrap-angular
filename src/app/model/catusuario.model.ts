import { CatRol } from './catrol.model';

export interface Catusuario {
  usrUsuario: number;
  usrUsername: string;
  usrNombreusuario: string;
  usrPassword: string;
  usrEmail: string;
  usrPerfil: string;
  usrTelefono: string;
  roles: CatRol[];
}
