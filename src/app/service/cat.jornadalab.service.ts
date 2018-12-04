import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catjornadalab } from '../model/catjornadalab.model';
import { CatJornadalabComponent } from '../catalogos/cat-jornadalab/cat-jornadalab.component';

@Injectable({
  providedIn: 'root'
}
)


export class JornadaLAbService {
    private url = 'http://localhost:8085/api/v1/Jornada';

    constructor( private clienteHttp: HttpClient) {}

    getJornadas() {
      return this.clienteHttp.get<Catjornadalab[]>(this.url + '/fetch');
    }

    getJornada(id): Observable<Catjornadalab> {
      return this.clienteHttp.get<Catjornadalab>(`${this.url}/fetch/${id}`);
    }
    addjornadalab(jolTipo) {
      const obj = {
        jolTipo: jolTipo
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }
  }

