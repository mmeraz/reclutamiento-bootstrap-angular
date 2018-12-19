import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class ContactClienteService {

    private url = 'http://localhost:8085/api/v1/cliente';
    private urll = 'http://localhost:8085/api/v1/clcContacto';
    private httpHeaders = new HttpHeaders({ 'ContentType': 'application/json' });
    private headers;
    constructor( private clienteHttp: HttpClient) {}

    getContactcliente() {
      this.getHeaders();
      return this.clienteHttp.get(this.url + '/fetchAll', {
        headers: this.headers});
    }

    addcontacto( cliIdcliente, clcNombre, clcTelefono, clcEmail, clcTipo, clcExtension) {
      this.getHeaders();
      const obj = {
        cliCliente: {
          cliIdcliente: cliIdcliente
        },
        clcNombre: clcNombre,
        clcTelefono: clcTelefono,
        clcEmail: clcEmail,
        clcTipo: clcTipo,
        clcExtension: clcExtension
      };
      this.clienteHttp.post(this.urll + '/add', obj, {
        headers: this.headers})
          .subscribe(res => console.log('Done'));
    }

    editBusiness(id) {
      this.getHeaders();
      return this
              .clienteHttp
              .get(`${this.url}/fetch/${id}`, {
                headers: this.headers});
      }
      editBusinessc(id) {
        this.getHeaders();
        return this
                .clienteHttp
                .get(`${this.urll}/fetch/${id}`, {
                  headers: this.headers});
        }

    updateBusiness( clcNombre, clcTelefono, clcEmail, clcTipo, clcExtension, clcIdconcli) {
      this.getHeaders();
      clcIdconcli = clcIdconcli;
      const obj = {
        clcNombre: clcNombre,
        clcTelefono: clcTelefono,
        clcEmail: clcEmail,
        clcTipo: clcTipo,
        clcExtension: clcExtension
      };
      this
        .clienteHttp
        .put(`${this.urll}/update/${clcIdconcli}`, obj, {
          headers: this.headers})
        .subscribe(res => console.log('Done editado'));
    }
    deleteBusiness(id) {
      this.getHeaders();
      return this
                .clienteHttp
                .delete(`${this.urll}/delete/${id}`, {
                  headers: this.headers});
    }
    getHeaders() {
      this.headers = new HttpHeaders();
      this.headers = this.headers
      .append('Authorization', 'Bearer ' + Cookie
      .get('access_token'));
      return this.headers;
   }



  }
