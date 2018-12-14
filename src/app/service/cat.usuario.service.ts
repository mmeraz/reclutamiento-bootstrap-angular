import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catusuario } from '../model/catusuario.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class UsuarioService {
  private url = 'http://localhost:8085/api/v1/Usuario';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getUsuarios() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }

  addusuario(usrUsername, usrNombreUsuario, usrPassword, usrEmail, usrPerfil, usrTelefono) {
    this.getHeaders();
    const obj = {
      usrUsername: usrUsername,
      usrNombreusuario: usrNombreUsuario,
      usrPassword: usrPassword,
      usrEmail: usrEmail,
      usrPerfil: usrPerfil,
      usrTelefono: usrTelefono
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
     .subscribe(res => console.log('Done'));
  }

//   refresh(): void {
//     // window.location.reload();
//  }

  getUsuario(id): Observable<Catusuario> {
    this.getHeaders();
    return this.clienteHttp.get<Catusuario>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(usrUsername, usrNombreUsuario, usrPassword, usrEmail, usrPerfil, usrTelefono, usrIdusuario) {
    this.getHeaders();
    usrIdusuario = usrIdusuario;
    const obj = {
      usrUsername: usrUsername,
      usrNombreusuario: usrNombreUsuario,
      usrPassword: usrPassword,
      usrEmail: usrEmail,
      usrPerfil: usrPerfil,
      usrTelefono: usrTelefono
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${usrIdusuario}`, obj, {
        headers: this.headers})
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    this.getHeaders();
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`, {
                headers: this.headers});
  }
  getHeaders() {
    this.headers = new HttpHeaders();
    this.headers = this.headers
    .append('Authorization', 'Bearer ' + Cookie
    .get('access_token'));
    return this.headers;
 }


}

