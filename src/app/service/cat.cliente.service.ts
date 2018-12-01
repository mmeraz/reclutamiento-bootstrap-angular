import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catcliente } from '../model/catcliente.model';

@Injectable({
  providedIn: 'root'
}
)

export class ClienteService {
  private url = 'http://localhost:8085/api/v1/cliente';

  constructor( private clienteHttp: HttpClient) {}

  getClientes() {
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


