import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catcontecnicos } from '../model/catcontecnicos.model';

@Injectable({
  providedIn: 'root'
}
)
export class ConTecnicosService {

  private url = 'http://localhost:8085/api/v1/ConocimientosTec';

  constructor( private clienteHttp: HttpClient) {}

  getContecnicos() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addcontecnicos(cotConocimiento, cotTipo) {
    const obj = {
      cotConocimiento: cotConocimiento,
      cotTipo: cotTipo
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getContecnico(id): Observable<Catcontecnicos> {
    return this.clienteHttp.get<Catcontecnicos>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(cotConocimiento, cotTipo, cotIdconcimiento) {
    cotIdconcimiento = cotIdconcimiento;
    const obj = {
      cotConocimiento: cotConocimiento,
      cotTipo: cotTipo
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${cotIdconcimiento}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}

