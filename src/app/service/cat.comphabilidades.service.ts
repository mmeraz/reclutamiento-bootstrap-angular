import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catcomphabilidades } from '../model/catcomphabilidades.model';

@Injectable({
  providedIn: 'root'
}
)

export class CompHabilidadesService {
  private url = 'http://localhost:8085/api/v1/comphabilidades';

  constructor( private clienteHttp: HttpClient) {}

  getComphabilidadess() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addcomphabilidades(cohDescripcion) {
    const obj = {
      cohDescripcion: cohDescripcion
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getComphabilidades(id): Observable<Catcomphabilidades> {
    return this.clienteHttp.get<Catcomphabilidades>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(cohDescripcion, cohIdcompetencia) {
    cohIdcompetencia = cohIdcompetencia;
    const obj = {
      cohDescripcion: cohDescripcion,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${cohIdcompetencia}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}

