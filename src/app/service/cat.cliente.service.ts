import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catcliente } from '../model/catcliente.model';

@Injectable({
  providedIn: 'root'
}
)

export class ClienteService {
  private url = 'http://localhost:8085/api/v1/';
  constructor( private clienteHttp: HttpClient) {}

  getAreas() {
    return this.clienteHttp.get<Catcliente[]>(this.url + '/fetch');
  }

  addcliente(cliNombre, cliRazonsocial  ) {
    const obj = {
      cliNombre : cliNombre,
      cliRazonsocial : cliRazonsocial
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }


}


