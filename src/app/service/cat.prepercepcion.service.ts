import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catprepercepcion } from '../model/catprepercepcion.model';
import { Cookie } from 'ng2-cookies';
@Injectable({
  providedIn: 'root'
}
)
export class PrePercepcionService {
  private url = 'http://localhost:8085/api/v1/Percepciones';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getPercepciones() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }

  addprecepcion(preTipo) {
    this.getHeaders();
    const obj = {
      preTipo: preTipo
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getPrecepcion(id): Observable<Catprepercepcion> {
    this.getHeaders();
    return this.clienteHttp.get<Catprepercepcion>(`${this.url}/fetch/${id}`, {
      headers: this.headers});
  }
  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(perTipo, preIdprestaciones) {
    this.getHeaders();
    const obj = {
      preTipo: perTipo,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${preIdprestaciones}`, obj, {
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
