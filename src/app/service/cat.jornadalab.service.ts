import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catjornadalab } from '../model/catjornadalab.model';
import { CatJornadalabComponent } from '../catalogos/cat-jornadalab/cat-jornadalab.component';

@Injectable({
  providedIn: 'root'
}
)

export class JornadaLAbService {
    private url = 'http://localhost:8085/api/v1/jornadalab';
    constructor( private clienteHttp: HttpClient) {}

    getJornadalabs() {
      return this.clienteHttp.get(this.url + '/fetch');
    }

    addjornadalab(jolTipo) {
      const obj = {
        jolTipo : jolTipo
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }

    refresh(): void {
      window.location.reload();
   }

    getJornalaboral(id): Observable<Catjornadalab> {
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
