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
    return this.clienteHttp.get(this.url + '/fetchAll');
  }
  getCliente(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  addcliente(cliNombre, cliRazonsocial) {
    const obj = {
      cliNombre : cliNombre,
      cliRazonsocial : cliRazonsocial
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }
  refresh(): void {
    window.location.reload();
 }

 editBusiness(id) {
  return this
          .clienteHttp
          .get(`${this.url}/fetch/${id}`);
  }

updateBusiness(cliNombre, cliRazonsocial, cliIdcliente) {
  cliIdcliente = cliIdcliente;
  const obj = {
    cliNombre : cliNombre,
    cliRazonsocial : cliRazonsocial
  };
  this
    .clienteHttp
    .put(`${this.url}/update/${cliIdcliente}`, obj)
    .subscribe(res => console.log('Done editado'));
}
deleteBusiness(id) {
  return this
            .clienteHttp
            .delete(`${this.url}/delete/${id}`);
}


}


