import { Injectable, EventEmitter } from '@angular/core';
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
  //mostrarMenuEmitter = new EventEmitter<boolean>();

  get usuario(): Catusuario {

    if(this._usuario != null) {
      return this._usuario ;
    }else if(this._usuario == null && sessionStorage.getItem('usuario') != null){
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Catusuario;
      return this._usuario;
    }
  }
  get token(): string {
    if(this._usuario != null) {
      return this._token ;
    }else if(this._token == null && sessionStorage.getItem('token') != null){
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

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

  isAuthenticated(): boolean {
    this.payload = this.ObtenesToken(this.token);
    if(this.payload != null && this.payload.usrUsername && this.payload.usrUsername.length > 0){
      return true;
    }else{
      return false;
    }

  }
}
