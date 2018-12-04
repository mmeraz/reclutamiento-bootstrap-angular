import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Catprioridad } from '../model/catprioridad.model';

@Injectable({
  providedIn: 'root'
}
)
export class PrioridadService {
    private url = 'http://localhost:8085/api/v1/Prioridad';

    constructor( private clienteHttp: HttpClient) {}

    getPrioridads() {
      return this.clienteHttp.get(this.url + '/fetch');
    }

    addprioridad(priNombre) {
      const obj = {
        priNombre: priNombre
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }

    refresh(): void {
      window.location.reload();
   }

    getPrioridad(id): Observable<Catprioridad> {
      return this.clienteHttp.get<Catprioridad>(`${this.url}/fetch/${id}`);
    }
    editBusiness(id) {
      return this
              .clienteHttp
              .get(`${this.url}/fetch/${id}`);
      }

    updateBusiness(priNombre, priIdprioridad) {
      priIdprioridad = priIdprioridad;
      const obj = {
        priNombre: priNombre,
        };
      this
        .clienteHttp
        .put(`${this.url}/update/${priIdprioridad}`, obj)
        .subscribe(res => console.log('Done editado'));
    }
    deleteBusiness(id) {
      return this
                .clienteHttp
                .delete(`${this.url}/delete/${id}`);
    }


  }

