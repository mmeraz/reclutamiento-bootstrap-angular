import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catcomphabilidades } from '../model/catcomphabilidades.model';

@Injectable({
  providedIn: 'root'
}
)

export class CompHabilidadesService {
    private url = 'http://localhost:8085/api/v1/';


  constructor( private clienteHttp: HttpClient) {}

  getAreas() {
    return this.clienteHttp.get<Catcomphabilidades[]>(this.url + '/fetch');
  }

  addcomphabilidades(cohDescripcion) {
    const obj = {
      cohDescripcion: cohDescripcion
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }


}

