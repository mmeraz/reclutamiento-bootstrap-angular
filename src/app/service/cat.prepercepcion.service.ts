import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catprepercepcion } from '../model/catprepercepcion.model';

@Injectable({
  providedIn: 'root'
}
)
export class PrePercepcionService {
    private url = 'http://localhost:8085/api/v1/';

    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      return this.clienteHttp.get<Catprepercepcion[]>(this.url + '/fetch');
    }

    addprecepcion(preTipo) {
      const obj = {
        preTipo: preTipo
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }


  }

