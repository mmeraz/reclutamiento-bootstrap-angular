import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catcomphabilidades } from '../model/catcomphabilidades.model';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class CompHabilidadesService {
  private url = 'http://localhost:8085/api/v1/Competencias';
  private headers;
  constructor( private clienteHttp: HttpClient, private router: Router) {}

  getCompHabilidades() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }

  addCompHabilidades(cohDescripcion) {
    this.getHeaders();
    const obj = {
      cohDescripcion: cohDescripcion
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getcomphabilidad(id): Observable<Catcomphabilidades> {
    this.getHeaders();
    return this.clienteHttp.get<Catcomphabilidades>(`${this.url}/fetch/${id}`, {
      headers: this.headers});
  }
  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(cohDescripcion, cohIdcompetencia) {
    this.getHeaders();
    const obj = {
      cohDescripcion: cohDescripcion,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${cohIdcompetencia}`, obj, {
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

