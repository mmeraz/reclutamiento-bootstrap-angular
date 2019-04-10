import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catestasolicitud } from '../model/catestasolicitud.model';
import { Cookie } from 'ng2-cookies';
@Injectable({
  providedIn: 'root'
}
)
export class EstasolicitudService {

  private url = 'http://localhost:8085/api/v1/EstatusSolicitud';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getestasolicituds() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }

  addestasolicitud(estDescripcion) {
    this.getHeaders();
    const obj = {
      estDescripcion: estDescripcion
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getestasolicitud(id): Observable<Catestasolicitud> {
    this.getHeaders();
    return this.clienteHttp.get<Catestasolicitud>(`${this.url}/fetch/${id}`, {
      headers: this.headers});
  }
  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(estDescripcion, estIdestatus) {
    this.getHeaders();
    estIdestatus = estIdestatus;
    const obj = {
      estDescripcion: estDescripcion,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${estIdestatus}`, obj, {
        headers: this.headers});
      // .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    this.getHeaders();
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`,{
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
