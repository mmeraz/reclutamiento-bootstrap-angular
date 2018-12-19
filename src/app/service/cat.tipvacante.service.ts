import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CatTipoVacante } from '../model/cattipovacante.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class TipoVacanteService {
  private url = 'http://localhost:8085/api/v1/TipoVacante';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getTipoVacantes() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }

  addTipVacante(tvaTipo) {
    this.getHeaders();
    const obj = {
      tvaTipo: tvaTipo
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getTipovacante(id): Observable<CatTipoVacante> {
    this.getHeaders();
    return this.clienteHttp.get<CatTipoVacante>(`${this.url}/fetch/${id}`, {
      headers: this.headers});
  }
  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(tvaTipo, tvaIdtipovacante) {
    this.getHeaders();
    tvaIdtipovacante = tvaIdtipovacante;
    const obj = {
      tvaTipo: tvaTipo,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${tvaIdtipovacante}`, obj, {
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

