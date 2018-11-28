import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catidioma } from '../model/catidioma.model';

@Injectable({
  providedIn: 'root'
}
)

export class IdiomaService {
    private url = 'http://localhost:8085/api/v1/';

    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      return this.clienteHttp.get<Catidioma[]>(this.url + '/fetch');
    }

    addidioma(idiNombre) {
      const obj = {
        idiNombre: idiNombre
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }


  }

