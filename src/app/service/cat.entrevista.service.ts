import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catentrevista } from '../model/catentrevista.model';
import { Cookie } from 'ng2-cookies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EntrevistaService {
    private url = 'http://localhost:8085/api/v1/EntEntrevista';
    private headers;

    constructor(private clienteHttp: HttpClient) {}

    getEntrevistas() {
      this.getHeaders();
      return this.clienteHttp.get(this.url + '/fetch', {
        headers: this.headers});
    }
    getHeaders() {
      this.headers = new HttpHeaders();
      this.headers = this.headers.append('Authorization', 'Bearer ' + Cookie.get('access_token'));
      return this.headers;
   }
   getEntrevista(id) {
    this.getHeaders();
    return this.clienteHttp.get<Catentrevista>(`${this.url}/fetch/${id}`, {
      headers: this.headers});
  }

  addEntrevista( entrevista: Catentrevista) {
    this.getHeaders();
    const obj = entrevista;
    this.clienteHttp.post(this.url + '/add', obj, {headers: this.headers})
    .subscribe(res => console.log('Done'));
  }

  editBusiness(id): Observable<Catentrevista> {
    this.getHeaders();
    return this
            .clienteHttp
            .get<Catentrevista>(`${this.url}/fetch/${id}`, {headers: this.headers});
    }

    deleteBusiness(id) {
      this.getHeaders();
      return this
                .clienteHttp
                .delete(`${this.url}/delete/${id}`, {
                  headers: this.headers});
    }

    updateBusiness(entrevista: Catentrevista, entIdentrevista ) {
      this.getHeaders();
      const obj = entrevista;
      this.clienteHttp.put(`${this.url}/update/${entIdentrevista}`, obj,
      {headers: this.headers}).subscribe(res => console.log('Done editado'));
    }

    getSeguimientoEntrevista() {
      this.getHeaders();
      return this.clienteHttp.get(`${this.url}/fetchSec`,
      {headers: this.headers});
    }

    getSeguimientoB() {
      this.getHeaders();
      return this.clienteHttp.get(`${this.url}/fetchSecB`,
      {headers: this.headers});
    }

    getSecSeguimientoEntrevistado() {
      this.getHeaders();
      return this.clienteHttp.get(`${this.url}/fetchActive/15`,
         {headers: this.headers});
    }

}
