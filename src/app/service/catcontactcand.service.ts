import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catarea } from '../model/catarea.model';
import { CatContactoCandidato } from '../model/catcontactocandidato';

@Injectable({
  providedIn: 'root'
}
)
export class ContactoCandService {
  private url = 'http://localhost:8085/api/v1/conContactocan';

  constructor( private clienteHttp: HttpClient) {}

  getContactos() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addContactp(conTelmovil) {
    const obj = {
      conTelmovil: conTelmovil
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getContacto(id): Observable<CatContactoCandidato> {
    return this.clienteHttp.get<CatContactoCandidato>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(conTelmovil, conIdcontacto) {
    conIdcontacto = conIdcontacto;
    const obj = {
      conTelmovil: conTelmovil,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${conIdcontacto}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}
