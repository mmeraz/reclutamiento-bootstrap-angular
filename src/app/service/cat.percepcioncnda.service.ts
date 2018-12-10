import { Catpercepcioncnda } from '../model/catpercepcioncnda.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class PercepcioncndaService {
  private url = 'http://localhost:8085/api/v1/Percepciones';

  constructor(private clienteHttp: HttpClient) {}

  getPercepciones() {
    return this.clienteHttp.get<Catpercepcioncnda[]>(this.url + 'fetch');
  }

  getPercepcion(id): Observable<Catpercepcioncnda> {
    return this.clienteHttp.get<Catpercepcioncnda>(`${this.url}/fetch/${id}`);
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
