import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { Catarea } from '../model/catarea.model';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class AreaService {
  private url = 'http://localhost:8085/api/v1/areaNegocio';
  private headers;
  constructor( private clienteHttp: HttpClient, private router: Router) {}

  private isNoAutorizado(e): boolean {
    if (e.status === 401 || e.status === 403) {
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

  getAreas() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {
      headers: this.headers}).pipe(
      catchError (e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }

  addarea(arnTipo) {
    this.getHeaders();
    const obj = {
      arnTipo: arnTipo
    };
    this.clienteHttp.post(this.url + '/add', obj, {
      headers: this.headers}).subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getArea(id): Observable<Catarea> {
    this.getHeaders();
    return this.clienteHttp.get<Catarea>(`${this.url}/fetch/${id}`, {
      headers: this.headers}).pipe(
      catchError (e => {
        this.isNoAutorizado(e);
        return throwError(e);
      })
    );
  }
  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {
              headers: this.headers});
    }

  updateBusiness(arnTipo, arnIdarean) {
    this.getHeaders();
    arnIdarean = arnIdarean;
    const obj = {
      arnTipo: arnTipo,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${arnIdarean}`, obj, {
        headers: this.headers}).subscribe(res => console.log(''));
  }
  deleteBusiness(id) {
    this.getHeaders();
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`, {
                headers: this.headers}).pipe(
                catchError (e => {
                  this.isNoAutorizado(e);
                  return throwError(e);
                })
              );
  }

  getHeaders() {
     this.headers = new HttpHeaders();
     this.headers = this.headers.append('Authorization', 'Bearer ' + Cookie.get('access_token'));
     return this.headers;
  }
}

