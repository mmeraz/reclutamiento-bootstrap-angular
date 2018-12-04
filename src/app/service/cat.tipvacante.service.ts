import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Cattipovacante } from '../model/cattipovacante.model';

@Injectable({
  providedIn: 'root'
}
)
export class TipoVacanteService {
  private url = 'http://localhost:8085/api/v1/TipoVancante';

  constructor( private clienteHttp: HttpClient) {}

  getVacantes() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  // addVacante(arnTipo) {
  //   const obj = {
  //     arnTipo: arnTipo
  //   };
  //   this.clienteHttp.post(this.url + '/add', obj)
  //       .subscribe(res => console.log('Done'));
  // }

  refresh(): void {
    window.location.reload();
 }

  getVacante(id): Observable<Cattipovacante> {
    return this.clienteHttp.get<Cattipovacante>(`${this.url}/fetch/${id}`);
  }


}

