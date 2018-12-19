import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catprioridad } from '../model/catprioridad.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class PrioridadService {
    private url = 'http://localhost:8085/api/v1/Prioridad';
    private headers;
    constructor( private clienteHttp: HttpClient) {}

    getPrioridades() {
    this.getHeaders();
      return this.clienteHttp.get(this.url + '/fetch', {
        headers: this.headers});
    }

    addprioridad(priNombre) {
      this.getHeaders();
      const obj = {
        priNombre: priNombre
      };
      this.clienteHttp.post(this.url + '/add', obj, {
        headers: this.headers})
          .subscribe(res => console.log('Done'));
    }

    refresh(): void {
      window.location.reload();
   }

    getPrioridad(id): Observable<Catprioridad> {
      this.getHeaders();
      return this.clienteHttp.get<Catprioridad>(`${this.url}/fetch/${id}`, {
        headers: this.headers});
    }
    editBusiness(id) {
      this.getHeaders();
      return this
              .clienteHttp
              .get(`${this.url}/fetch/${id}`, {
                headers: this.headers});
      }

    updateBusiness(priNombre, priIdprioridad) {
      this.getHeaders();
      priIdprioridad = priIdprioridad;
      const obj = {
        priNombre: priNombre,
        };
      this
        .clienteHttp
        .put(`${this.url}/update/${priIdprioridad}`, obj, {
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


