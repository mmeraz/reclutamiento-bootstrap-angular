import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catpercepcioncndofr } from '../model/catpercepcioncndofr.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PercepciondofrService {
    private url = 'http://localhost:8085/api/v1/Percepciones';

    constructor(private clienteHttp: HttpClient) {}

    getPercepciones() {
      return this.clienteHttp.get<Catpercepcioncndofr[]>(this.url + 'fetch');
    }

    getPercepcion(id): Observable<Catpercepcioncndofr> {
      return this.clienteHttp.get<Catpercepcioncndofr>(`${this.url}/fetch/${id}`);
    }

    editBusiness(id) {
      return this
              .clienteHttp
              .get(`${this.url}/fetch/${id}`);
    }
    updateBusiness(  preIdprestaciones, preTipo) {
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
