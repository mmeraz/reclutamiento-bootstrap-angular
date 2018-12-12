import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidato } from '../model/candidato.model';
import { Catcandidato } from '../model/catcandidato.model';

@Injectable({
  providedIn: 'root'
})

export class CandidatoService {


    private url = 'http://localhost:8085/api/v1/Datoscandidato';

    constructor( private clienteHttp: HttpClient) {}

    getCandidatos() {
      return this.clienteHttp.get(this.url + '/fetch');
    }

    getCandidato(id) {
      return this.clienteHttp.get<Candidato>(`${this.url}/fetch${id}`);

    }

    addCandidato(candidato: Catcandidato) {
      const obj = candidato;
      this.clienteHttp.post(this.url + '/add', obj)
      .subscribe(res => console.log('Done'));
    }

    editBusiness(id) {
      return this
              .clienteHttp
              .get(`${this.url}/fetch/${id}`);
      }

    // updateBusiness(arnTipo,) {
    //    = arnIdarean;
    //   const obj = {
    //     arnTipo: arnTipo,
    //     };
    //   this
    //     .clienteHttp
    //     .put(`${this.url}/update/${arnIdarean}`, obj)
    //     .subscribe(res => console.log('Done editado'));
    // }
    deleteBusiness(id) {
      return this
                .clienteHttp
                .delete(`${this.url}/delete/${id}`);
    }

  }
