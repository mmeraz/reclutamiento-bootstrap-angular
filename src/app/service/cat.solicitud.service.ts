import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catsolicitud } from '../model/catsolicitud.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
}
)
export class SolicitudService {
    private url = 'http://localhost:8085/api/v1/solicitud';
    private headers;
    constructor(private clienteHttp: HttpClient, private router: Router) {}

    addSolicitud(solicitud: Catsolicitud) {
      this.getHeaders();
      const obj = solicitud;
      this.clienteHttp.post(this.url + '/add', obj, {
        headers: this.headers})
          .subscribe(res => console.log('Done'));
    }

    getSolicitudes() {
      this.getHeaders();
      return this.clienteHttp.get(this.url + '/fetch', {
        headers: this.headers});
    }

    getSolicitudesA() {
      this.getHeaders();
      return this.clienteHttp.get(this.url + '/fetchBy/Alta', {
        headers: this.headers});
    }

    getSolicitudesM() {
      this.getHeaders();
      return this.clienteHttp.get(this.url + '/fetchBy/Media', {
        headers: this.headers});
    }

    getSolicitudesB() {
      this.getHeaders();
      return this.clienteHttp.get(this.url + '/fetchBy/Baja', {
        headers: this.headers});
    }

    deleteBusiness(id) {
      this.getHeaders();
      return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`, {
                headers: this.headers});
    }

    editBusiness(id): Observable<Catsolicitud> {
      this.getHeaders();
      return this
              .clienteHttp
              .get<Catsolicitud>(`${this.url}/fetch/${id}`, {
                headers: this.headers});
    }

    updateBusiness(solicitud: Catsolicitud, solIdsolicitud) {
      this.getHeaders();
      const obj = solicitud;
      this.clienteHttp.put(`${this.url}/update/${solIdsolicitud}`, obj, {
        headers: this.headers}).subscribe(res => console.log('Done editado'));
    }
    getHeaders() {
      this.headers = new HttpHeaders();
      this.headers = this.headers
      .append('Authorization', 'Bearer ' + Cookie
      .get('access_token'));
      return this.headers;
   }
  }
