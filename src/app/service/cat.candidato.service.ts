import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidato } from '../model/candidato.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})

export class CandidatoService {


    private url = 'http://localhost:8085/api/v1/Datoscandidato';

    private headers;
    constructor( private clienteHttp: HttpClient) {}

    getCandidatos() {
      return this.clienteHttp.get(this.url + '/fetch', {
        headers: this.headers});
    }

    getCandidato(id) {
      return this.clienteHttp.get<Candidato>(`${this.url}/fetch${id}`, {
        headers: this.headers});

    }

    editBusiness(id) {
      return this
              .clienteHttp
              .get(`${this.url}/fetch/${id}`, {
                headers: this.headers});
      }

    // updateBusiness(arnTipo,) {
    //    = arnIdarean;
    //   const obj = {
    //     arnTipo: arnTipo,
    //     };
    //   this
    //     .clienteHttp
    //     .put(`${this.url}/update/${arnIdarean}`, obj)
    //     .subscribe(res => console.log('Done editado'));
    // }

    deleteBusiness(id) {
      return this
                .clienteHttp
                .delete(`${this.url}/delete/${id}`, {
                  headers: this.headers});
    }

    getHeaders() {
      this.headers = new HttpHeaders();
      this.headers = this.headers.append('Authorization', 'Bearer ' + Cookie.get('access_token'));
      return this.headers;
   }

  }
