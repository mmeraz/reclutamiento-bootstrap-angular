import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catestacandidato } from '../model/catestacandidato.model';

@Injectable({
  providedIn: 'root'
}
)

export class EstaCandidatoService {
    private url = 'http://localhost:8085/api/v1/EstatusCandidato';



    constructor( private clienteHttp: HttpClient) {}

    getEstatusCandidatos() {
      return this.clienteHttp.get<Catestacandidato[]>(this.url + '/fetch');
    }
    getEstatusCandidato(id): Observable<Catestacandidato> {
      return this.clienteHttp.get<Catestacandidato>(`${this.url}/fetch/${id}`);
    }

    addEstatusCandidato(escDescripcion) {
      const obj = {
        escDescripcion: escDescripcion
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }
    refresh(): void {
      window.location.reload();
   }
    editBusiness(id) {
      return this
              .clienteHttp
              .get(`${this.url}/fetch/${id}`);
      }
    updateBusiness(escDescripcion, escIdestatus) {
      escIdestatus = escIdestatus;
      const obj = {
        escDescripcion: escDescripcion,
        };
      this
        .clienteHttp
        .put(`${this.url}/update/${escIdestatus}`, obj)
        .subscribe(res => console.log('Done editado'));
    }
    deleteBusiness(id) {
      return this
                .clienteHttp
                .delete(`${this.url}/delete/${id}`);
    }

  }

