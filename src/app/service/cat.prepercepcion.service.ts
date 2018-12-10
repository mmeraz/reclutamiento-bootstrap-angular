import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catprepercepcion } from '../model/catprepercepcion.model';

@Injectable({
  providedIn: 'root'
}
)
export class PrePercepcionService {
    private url = 'http://localhost:8085/api/v1/Percepciones';

    constructor( private clienteHttp: HttpClient) {}

    getPercepciones() {
      return this.clienteHttp.get<Catprepercepcion[]>(this.url + '/fetch');
    }

    addprecepcion(preTipo) {
      const obj = {
        preTipo: preTipo
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }

    refresh(): void {
      window.location.reload();
   }

    getPercepcion(id): Observable<Catprepercepcion> {
      return this.clienteHttp.get<Catprepercepcion>(`${this.url}/fetch/${id}`);
    }
    editBusiness(id) {
      return this
              .clienteHttp
              .get(`${this.url}/fetch/${id}`);
      }

    updateBusiness(preTipo, preIdprestaciones) {
      preIdprestaciones = preIdprestaciones;
      const obj = {
        preTipo: preTipo,
        };
      this
        .clienteHttp
        .put(`${this.url}/update/${preIdprestaciones}`, obj)
        .subscribe(res => console.log('Done editado'));
    }
    deleteBusiness(id) {
      return this
                .clienteHttp
                .delete(`${this.url}/delete/${id}`);
    }


  }

