import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catidioma } from '../model/catidioma.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)

export class IdiomaService {
  private url = 'http://localhost:8085/api/v1/Idioma';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getIdiomas() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }
  getIdioma(id): Observable<Catidioma> {
    this.getHeaders();
    return this.clienteHttp.get<Catidioma>(`${this.url}/fetch/${id}`, {
      headers: this.headers});
  }

  addIdioma(idiNombre) {
    this.getHeaders();
    const obj = {
      idiNombre: idiNombre
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

  updateBusiness(idiNombre, idiIdidioma) {
    this.getHeaders();
    idiIdidioma = idiIdidioma;
    const obj = {
      idiNombre: idiNombre,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${idiIdidioma}`, obj, {
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

