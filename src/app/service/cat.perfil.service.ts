import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catperfil } from '../model/catperfil.model';

@Injectable({
  providedIn: 'root'
}
)

export class PerfilService {
    private url = 'http://localhost:8085/api/v1/';


    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      return this.clienteHttp.get<Catperfil[]>(this.url + '/fetch');
    }
    addperfil(perPerfil) {
      const obj = {
        perPerfil : perPerfil
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }
  }
