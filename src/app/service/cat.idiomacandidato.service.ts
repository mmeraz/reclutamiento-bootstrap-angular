import { Catidiomacandidato } from '../model/catidiomacandidato.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export class IdiomaCandidatoService {
  private url = 'http://localhost:8085/api/v1/Idioma';

  constructor( private clienteHttp: HttpClient) {}

  getidiomas() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  addidioma(idcIdidiomacandidato, idcNivel, idcIdioma) {
    const obj = {
      idcIdidiomacandidato,
      idcNivel,
      idcIdioma
    };
    this.clienteHttp.post(this.url + '/add', obj)
        .subscribe(res => console.log('Done'));
  }

  refresh(): void {
    window.location.reload();
 }

  getIdioma(id): Observable<Catidiomacandidato> {
    return this.clienteHttp.get<Catidiomacandidato>(`${this.url}/fetch/${id}`);
  }
  editBusiness(id) {
    return this
            .clienteHttp
            .get(`${this.url}/fetch/${id}`);
    }

  updateBusiness(idcIdidiomacandidato, idcNivel, idcIdioma) {
    idcIdidiomacandidato = idcIdidiomacandidato;
    const obj = {
      idcNivel: idcNivel,
      idcIdioma: idcIdioma
      };
    this
      .clienteHttp
      .put(`${this.url}/update/${idcIdidiomacandidato}`, obj)
      .subscribe(res => console.log('Done editado'));
  }
  deleteBusiness(id) {
    return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
  }


  }
