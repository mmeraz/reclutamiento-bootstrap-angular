import { HttpClient } from '@angular/common/http';
import { Catproyecto } from '../model/catproyecto.model';
import { Observable } from 'rxjs';

export class ProyectoService {
    private url = 'http://localhost:8085/api/v1/proyecto';

    constructor( private clienteHttp: HttpClient) {}

  getProyectos() {
    return this.clienteHttp.get(this.url + '/fetch');
  }

  // addProyecto(arnTipo) {
  //   const obj = {
  //     arnTipo: arnTipo
  //   };
  //   this.clienteHttp.post(this.url + '/add', obj)
  //       .subscribe(res => console.log('Done'));
  // }

  refresh(): void {
    window.location.reload();
 }

  getProyeocto(id): Observable<Catproyecto> {
    return this.clienteHttp.get<Catproyecto>(`${this.url}/fetch/${id}`);
  }

  }
