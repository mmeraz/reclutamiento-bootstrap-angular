import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catidioma } from '../model/catidioma.model';

@Injectable({
  providedIn: 'root'
}
)

export class IdiomaService {
  private url = 'http://localhost:8085/api/v1/idiIdioma';

  constructor( private clienteHttp: HttpClient) {}

  getIdiomass() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addidioma(idiNombre) {
    const obj = {
      idiNombre: idiNombre
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getIdiomas(id): Observable<Catidioma> {
    return this.clienteHttp.get<Catidioma>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(idiNombre, idiIdidioma) {
    idiIdidioma = idiIdidioma;
    const obj = {
      idiNombre: idiNombre,
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${idiIdidioma}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }



}

