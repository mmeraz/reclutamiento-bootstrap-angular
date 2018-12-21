import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catarea } from '../model/catarea.model';
import { CatContactoCandidato } from '../model/catcontactocandidato';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
}
)
export class ContactoCandService {
  private url = 'http://localhost:8085/api/v1/conContactocan';
  private headers;

  constructor( private clienteHttp: HttpClient) {}

  getContactos() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetch', {headers: this.headers});
  }

  addContactp(conTelmovil) {
    this.getHeaders();
    const obj = {
      conTelmovil: conTelmovil
    };
    this.clienteHttp.post(this.url + '/add', obj, {headers: this.headers})
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getContacto(id): Observable<CatContactoCandidato> {
    this.getHeaders();
    return this.clienteHttp.get<CatContactoCandidato>(`${this.url}/fetch/${id}`, {headers: this.headers});
  }
  editBusiness(id) {
    this.getHeaders();
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`, {headers: this.headers});
    }

  updateBusiness(conTelmovil, conIdcontacto) {
    this.getHeaders();
    conIdcontacto = conIdcontacto;
    const obj = {
      conTelmovil: conTelmovil,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${conIdcontacto}`, obj, {headers: this.headers})
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    this.getHeaders();
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`, {headers: this.headers});
  }

  getHeaders() {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Authorization', 'Bearer ' + Cookie.get('access_token'));
    return this.headers;
 }



}
