import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catjornadalab } from '../model/catjornadalab.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)

export class JornadaLAbService {
  private url = 'http://localhost:8085/api/v1/Jornada';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getJornadas() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }

  addjornada(jolTipo) {
    this.getHeaders();
    const obj = {
      jolTipo: jolTipo
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getJornada(id): Observable<Catjornadalab> {
    this.getHeaders();
    return this.clienteHttp.get<Catjornadalab>(`${this.url}/fetch/${id}`, {
      headers: this.headers});
  }
  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(jolTipo, jolIdjornada) {
    this.getHeaders();
    jolIdjornada = jolIdjornada;
    const obj = {
      jolTipo: jolTipo,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${jolIdjornada}`, obj, {
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
