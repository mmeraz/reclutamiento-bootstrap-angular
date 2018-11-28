import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catprioridad } from '../model/catprioridad.model';

@Injectable({
  providedIn: 'root'
}
)
export class PrioridadService {
    private url = 'http://localhost:8085/api/v1/';

  constructor( private clienteHttp: HttpClient) {}

  getAreas() {
    return this.clienteHttp.get<Catprioridad[]>(this.url + '/fetch');
  }

  addprioridad(priNombre) {
    const obj = {
      priNombre: priNombre
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }


}

