import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catequipo } from '../model/catequipo.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class EquipoService {
  private url = 'http://localhost:8085/api/v1/Equipo';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getEquipos() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }

  addequipo(equNombre, equDescripcion) {
    this.getHeaders();
    const obj = {
      equNombre: equNombre,
      equDescripcion: equDescripcion
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getEquipo(id): Observable<Catequipo> {
    this.getHeaders();
    return this.clienteHttp.get<Catequipo>(`${this.url}/fetch/${id}`, {
      headers: this.headers});
  }
  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(equNombre, equDescripcion, equIdequipo) {
    this.getHeaders();
    const obj = {
      equNombre: equNombre,
      equDescripcion: equDescripcion
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${equIdequipo}`, obj, {
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

