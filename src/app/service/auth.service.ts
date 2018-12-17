import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catusuario } from '../model/catusuario.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario: Catusuario;
  private _token: string;
  private payload;
  constructor(private http: HttpClient) { }

  login(usuario: Catusuario): Observable<any> {
    const urlEndpoint = 'http://localhost:8085/oauth/token';
    const credenciales = btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    const params = new URLSearchParams ();
    params.set('grant_type', 'password');
    params.set('username', usuario.usrUsername);
    params.set('password', usuario.usrPassword);
    console.log(params.toString());
    return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
  }

  loguot() {
    Cookie.delete('access_token');
  }

  Guardarusuario(accessToken: string): void {
    this.payload = this.ObtenesToken(accessToken);
    this._usuario = {
      usrUsuario : null,
      usrUsername: '',
      usrNombreusuario: '',
      usrPassword: '',
      usrEmail: '',
      usrPerfil: '',
      usrTelefono: '',
      roles: []
  };
  this._usuario.usrUsername = this.payload.usrUsername;
  this._usuario.usrNombreusuario = this.payload.usrNombreusuario;
  this._usuario.usrPassword = this.payload.usrPassword;
  this._usuario.usrEmail = this.payload.usrEmail;
  this._usuario.usrPerfil = this.payload.usrPerfil;
  this._usuario.usrTelefono = this.payload.usrTelefono;
  this._usuario.roles = this.payload.authorities;
  sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }

  Guardartoken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  ObtenesToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }
}
