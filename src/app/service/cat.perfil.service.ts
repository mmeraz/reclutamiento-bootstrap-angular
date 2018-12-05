import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catperfil } from '../model/catperfil.model';

@Injectable({
  providedIn: 'root'
}
)
export class PerfilService {
  private url = 'http://localhost:8085/api/v1/perPerfil';

  constructor( private clienteHttp: HttpClient) {}

  getPerfiles() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addPerfil(perPerfil) {
    const obj = {
      perPerfil: perPerfil
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getPerfil(id): Observable<Catperfil> {
    return this.clienteHttp.get<Catperfil>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(perPerfil, perIdperfil) {
    perIdperfil = perIdperfil;
    const obj = {
      perPerfil: perPerfil,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${perIdperfil}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}
