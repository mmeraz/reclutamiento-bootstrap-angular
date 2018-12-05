import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catestasolicitud } from '../model/catestasolicitud.model';

@Injectable({
  providedIn: 'root'
}
)
export class EstasolicitudService {

  private url = 'http://localhost:8085/api/v1/estasolicitud';

  constructor( private clienteHttp: HttpClient) {}

  getestasolicituds() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addestasolicitud(estDescripcion) {
    const obj = {
      estDescripcion: estDescripcion
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getestasolicitud(id): Observable<Catestasolicitud> {
    return this.clienteHttp.get<Catestasolicitud>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(estDescripcion, estIdestatus) {
    estIdestatus = estIdestatus;
    const obj = {
      estDescripcion: estDescripcion,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${estIdestatus}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}
