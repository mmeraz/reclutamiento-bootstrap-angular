import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catcontecnicos } from '../model/catcontecnicos.model';

@Injectable({
  providedIn: 'root'
}
)
export class ConTecnicosService {
    private url = 'http://localhost:8085/api/v1/';


    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      return this.clienteHttp.get<Catcontecnicos[]>(this.url + '/fetch');
    }

    addconocimientostec(cotConocimientos, cotTipo ) {
      const obj = {
        cotConocimientos: cotConocimientos,
        cotTipo: cotTipo
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }


  }

