import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Cattipovacante } from '../model/cattipovacante.model';

@Injectable({
  providedIn: 'root'
}
)
export class TipoVacanteService {
  private url = 'http://localhost:8085/api/v1/tvatipovacante';

  constructor( private clienteHttp: HttpClient) {}

  getTipovancates() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addtvatipo(tvaTipo) {
    const obj = {
      tvaTipo: tvaTipo
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getTipovacante(id): Observable<Cattipovacante> {
    return this.clienteHttp.get<Cattipovacante>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(tvaTipo, tvaIdtipovacante) {
    tvaIdtipovacante = tvaIdtipovacante;
    const obj = {
      tvaTipo: tvaTipo,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${tvaIdtipovacante}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}

