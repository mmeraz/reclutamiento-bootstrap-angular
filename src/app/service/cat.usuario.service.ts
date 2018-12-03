import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catusuario } from '../model/catusuario.model';

@Injectable({
  providedIn: 'root'
}
)

export class UsuarioService {
    private url = 'http://localhost:8085/api/v1/Usuario';

    constructor( private clienteHttp: HttpClient) {}

    getUsuarios() {
      return this.clienteHttp.get<Catusuario[]>(this.url + '/fetch');
    }

    addusuario(usrUsername, usrNombreUsuario, usrPassword, usrEmail, usrPerfil, usrTelefono) {
      const obj = {
        usrUsername: usrUsername,
        usrNombreUsuario: usrNombreUsuario,
        usrPassword: usrPassword,
        usrEmail: usrEmail,
        usrPerfil: usrPerfil,
        usrTelefono : usrTelefono
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }
    getUsuario(id): Observable<Catusuario> {
      return this.clienteHttp.get<Catusuario>(`${this.url}/fetch/${id}`);
    }

  }

