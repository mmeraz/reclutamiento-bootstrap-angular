import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatIdiomaCandidato } from '../model/catidiomacandidato.model';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
@Injectable({
  providedIn: 'root'
}
)

export class CatIdiomaCandidatoService {
  private url = 'http://localhost:8085/api/v1/Idioma';
  private headers;

  constructor( private clienteHttp: HttpClient,
               private router: Router) {}

  getIdiomas() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch');
  }
  getIdioma(id): Observable<CatIdiomaCandidato> {
    this.getHeaders();
    return this.clienteHttp.get<CatIdiomaCandidato>(`${this.url}/fetch/${id}`);
  }

  addIdioma(idiNombre) {
    this.getHeaders();
    const obj = {
      idiNombre: idiNombre
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }


  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(idiNombre, idiIdidioma) {
    this.getHeaders();
    idiIdidioma = idiIdidioma;
    const obj = {
      idiNombre: idiNombre,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${idiIdidioma}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    this.getHeaders();
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }

  getHeaders() {
    this.headers = new HttpHeaders();
    this.headers = this.headers
    .append('Authorization', 'Bearer ' + Cookie
    .get('access_token'));
    return this.headers;
 } // agregar

}
