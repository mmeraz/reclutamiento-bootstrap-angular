import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catequipo } from '../model/catequipo.model';

@Injectable({
  providedIn: 'root'
}
)
export class EquipoService {
  private url = 'http://localhost:8085/api/v1/equEquipo';

  constructor( private clienteHttp: HttpClient) {}

  getEquipos() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addequipo(equNombre, equDescripcion) {
    const obj = {
      equNombre: equNombre,
      equDescripcion: equDescripcion
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getEquipo(id): Observable<Catequipo> {
    return this.clienteHttp.get<Catequipo>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(equNombre, equDescripcion, equIdequipo) {
    equIdequipo = equIdequipo;
    const obj = {
      equNombre: equNombre,
      equDescripcion: equDescripcion
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${equIdequipo}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}

