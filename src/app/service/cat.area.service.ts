import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catarea } from '../model/catarea.model';

@Injectable({
  providedIn: 'root'
}
)
export class AreaService {
  private url = 'http://localhost:8085/api/v1/areaNegocio';

  constructor( private clienteHttp: HttpClient) {}

  getAreas() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addarea(arnTipo) {
    const obj = {
      arnTipo: arnTipo
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  getArea(id): Observable<Catarea> {
    return this.clienteHttp.get<Catarea>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(arnTipo, arnIdarean) {
    arnIdarean = arnIdarean;
    const obj = {
      arnTipo: arnTipo,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${arnIdarean}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}

