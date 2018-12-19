import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catcontecnicos } from '../model/catcontecnicos.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class ConTecnicosService {
  private url = 'http://localhost:8085/api/v1/ConocimientosTec';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getContecnicos() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }

  addcontecnicos(cotConocimiento, cotTipo) {
    this.getHeaders();
    const obj = {
      cotConocimiento: cotConocimiento,
      cotTipo: cotTipo
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getContecnico(id): Observable<Catcontecnicos> {
    this.getHeaders();
    return this.clienteHttp.get<Catcontecnicos>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(cotConocimiento, cotTipo, cotIdconcimiento) {
    this.getHeaders();
    cotIdconcimiento = cotIdconcimiento;
    const obj = {
      cotConocimiento: cotConocimiento,
      cotTipo: cotTipo
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${cotIdconcimiento}`, obj, {
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

