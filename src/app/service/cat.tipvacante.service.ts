import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CatTipoVacante } from '../model/cattipovacante.model';

@Injectable({
  providedIn: 'root'
}
)
export class TipoVacanteService {
  private url = 'http://localhost:8085/api/v1/TipoVacante';

  constructor( private clienteHttp: HttpClient) {}

  getTipoVacantes() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addTipVacante(tvaTipo) {
    const obj = {
      tvaTipo: tvaTipo
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getTipovacante(id): Observable<CatTipoVacante> {
    return this.clienteHttp.get<CatTipoVacante>(`${this.url}/fetch/${id}`);
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

}
