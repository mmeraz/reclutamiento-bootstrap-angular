import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catjornadalab } from '../model/catjornadalab.model';

@Injectable({
  providedIn: 'root'
}
)

export class JornadaLAbService {
  private url = 'http://localhost:8085/api/v1/Jornada';

  constructor( private clienteHttp: HttpClient) {}

  getJornadas() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addjornada(jolTipo) {
    const obj = {
      jolTipo: jolTipo
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getJornada(id): Observable<Catjornadalab> {
    return this.clienteHttp.get<Catjornadalab>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(jolTipo, jolIdjornada) {
    jolIdjornada = jolIdjornada;
    const obj = {
      jolTipo: jolTipo,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${jolIdjornada}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}
