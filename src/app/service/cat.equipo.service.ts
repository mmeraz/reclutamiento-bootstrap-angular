import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catequipo } from '../model/catequipo.model';

@Injectable({
  providedIn: 'root'
}
)

export class EquipoService {
    private url = 'http://localhost:8085/api/v1/';


    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      return this.clienteHttp.get<Catequipo[]>(this.url + '/fetch');
    }

    addequipo(equNombre, equDescripcion) {
      const obj = {
        equNombre : equNombre,
        equDescripcion : equDescripcion
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }


  }

