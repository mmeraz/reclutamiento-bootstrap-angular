import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catjornadalab } from '../model/catjornadalab.model';

@Injectable({
  providedIn: 'root'
}
)


export class JornadaLAbService {
    private url = 'http://localhost:8085/api/v1/';

    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      return this.clienteHttp.get<Catjornadalab[]>(this.url + '/fetch');
    }
    addjornadalab(jolTipo) {
      const obj = {
        jolTipo: jolTipo
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }
  }

