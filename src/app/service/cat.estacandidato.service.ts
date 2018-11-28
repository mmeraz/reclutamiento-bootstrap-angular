import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catestacandidato } from '../model/catestacandidato.model';

@Injectable({
  providedIn: 'root'
}
)

export class EstaCandidatoService {
    private url = 'http://localhost:8085/api/v1/';



    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      return this.clienteHttp.get<Catestacandidato[]>(this.url + '/fetch');
    }

    addestatuscandidato(escDescripcion) {
      const obj = {
        escDescripcion: escDescripcion
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }


  }

