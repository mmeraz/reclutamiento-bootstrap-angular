import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidato } from '../model/candidato.model';
import { Catcandidato } from '../model/catcandidato.model';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})

export class CandidatoService {


    private url = 'http://localhost:8085/api/v1/Datoscandidato';

    private headers;
    constructor( private clienteHttp: HttpClient) {}

    getCandidatos() {
      this.getHeaders();
      return this.clienteHttp.get(this.url + '/fetch', {
        headers: this.headers});
    }

    getCandidato(id) {
      this.getHeaders();
      return this.clienteHttp.get<Candidato>(`${this.url}/fetch${id}`, {
        headers: this.headers});

    }

    addCandidato(candidato: Catcandidato) {
      this.getHeaders();
      const obj = candidato;
      this.clienteHttp.post(this.url + '/add', obj, {headers: this.headers})
      .subscribe(res => console.log('Done'));
    }

    editBusiness(id): Observable<Catcandidato> {
      this.getHeaders();
      return this
              .clienteHttp
              .get<Catcandidato>(`${this.url}/fetch/${id}`, {headers: this.headers});
      }




    deleteBusiness(id) {
      this.getHeaders();
      return this
                .clienteHttp
                .delete(`${this.url}/delete/${id}`, {
                  headers: this.headers});
    }

    updateBusiness(candidato: Catcandidato, cndIdcandidato ) {
      this.getHeaders();
      const obj = candidato;
      this.clienteHttp.put(`${this.url}/update/${cndIdcandidato}`, obj,
      {headers: this.headers}).subscribe(res => console.log('Done editado'));
    }
    getHeaders() {
      this.headers = new HttpHeaders();
      this.headers = this.headers.append('Authorization', 'Bearer ' + Cookie.get('access_token'));
      return this.headers;
   }

  }
