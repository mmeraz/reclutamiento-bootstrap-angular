import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catestacandidato } from '../model/catestacandidato.model';
import { Cookie } from 'ng2-cookies';
@Injectable({
  providedIn: 'root'
}
)

export class EstaCandidatoService {
    private url = 'http://localhost:8085/api/v1/EstatusCandidato';
    private headers;
    constructor( private clienteHttp: HttpClient) {}

    getEstatusCandidatos() {
      this.getHeaders();
      return this.clienteHttp.get<Catestacandidato[]>(this.url + '/fetch', {
        headers: this.headers});
    }
    getEstatusCandidato(id): Observable<Catestacandidato> {
      return this.clienteHttp.get<Catestacandidato>(`${this.url}/fetch/${id}`, {
        headers: this.headers});
    }

    addEstatusCandidato(escDescripcion) {
      this.getHeaders();
      const obj = {
        escDescripcion: escDescripcion
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
    updateBusiness(escDescripcion, escIdestatus) {
      this.getHeaders();
      escIdestatus = escIdestatus;
      const obj = {
        escDescripcion: escDescripcion,
        };
      this
        .clienteHttp
        .put(`${this.url}/update/${escIdestatus}`, obj, {
          headers: this.headers})
        .subscribe(res => console.log('Done editado'));
    }
    deleteBusiness(id) {
      this.getHeaders();
      return this
                .clienteHttp
                .delete(`${this.url}/delete/${id}`, {
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

