import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catusuario } from '../model/catusuario.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
    return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
  }

  loguot() {
    Cookie.delete('access_token');
  }
}
