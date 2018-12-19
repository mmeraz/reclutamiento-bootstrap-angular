import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catcliente } from '../model/catcliente.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)

export class ClienteService {
  private url = 'http://localhost:8085/api/v1/cliente';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getClientes() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetchAll', {
      headers: this.headers});
  }
  getCliente(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  addcliente(cliNombre, cliRazonsocial) {
    this.getHeaders();
    const obj = {
      cliNombre : cliNombre,
      cliRazonsocial : cliRazonsocial
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
        .subscribe(res => console.log('Done'));
  }
  refresh(): void {
    window.location.reload();
 }

 editBusiness(id) {
  this.getHeaders();
  return this
          .clienteHttp
          .get(`${this.url}/fetch/${id}`, {
            headers: this.headers});
  }

updateBusiness(cliNombre, cliRazonsocial, cliIdcliente) {
  this.getHeaders();
  cliIdcliente = cliIdcliente;
  const obj = {
    cliNombre : cliNombre,
    cliRazonsocial : cliRazonsocial
  };
  this
    .clienteHttp
    .put(`${this.url}/update/${cliIdcliente}`, obj,  {
      headers: this.headers})
    .subscribe(res => console.log('Done editado'));
}
deleteBusiness(id) {
  this.getHeaders();
  return this
            .clienteHttp
            .delete(`${this.url}/delete/${id}`,  {
              headers: this.headers});
}

getHeaders() {
  this.headers = new HttpHeaders();
  this.headers = this.headers.append('Authorization', 'Bearer ' + Cookie.get('access_token'));
  return this.headers;
}

}


