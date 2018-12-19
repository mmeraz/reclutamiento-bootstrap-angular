import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catperfil } from '../model/catperfil.model';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class PerfilService {
  private url = 'http://localhost:8085/api/v1/Perfil';
  private headers;
  constructor( private clienteHttp: HttpClient) {}

  getPerfiles() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers});
  }

  addPerfil(perPerfil) {
    this.getHeaders();
    const obj = {
      perPerfil: perPerfil
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers})
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getPerfil(id): Observable<Catperfil> {
    this.getHeaders();
    return this.clienteHttp.get<Catperfil>(`${this.url}/fetch/${id}`, {
      headers: this.headers});
  }


  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(perPerfil, perIdperfil) {
    this.getHeaders();
    perIdperfil = perIdperfil;
    const obj = {
      perPerfil: perPerfil,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${perIdperfil}`, obj, {
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
