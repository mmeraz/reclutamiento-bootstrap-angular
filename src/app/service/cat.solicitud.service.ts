import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catsolicitud } from '../model/catsolicitud.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}
)
export class SolicitudService {
    private url = 'http://localhost:8085/api/v1/solicitud';

    constructor(private clienteHttp: HttpClient) {}

    addSolicitud(solicitud: Catsolicitud) {
      const obj = solicitud;
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }

    getSolicitudes() {
      return this.clienteHttp.get(this.url + '/fetch');
    }

    deleteBusiness(id) {
      return this
              .clienteHttp
              .delete(`${this.url}/delete/${id}`);
    }

    editBusiness(id): Observable<Catsolicitud> {
      return this
              .clienteHttp
              .get<Catsolicitud>(`${this.url}/fetch/${id}`);
    }

    updateBusiness(solicitud: Catsolicitud, solIdsolicitud) {
      const obj = solicitud;
      this.clienteHttp.put(`${this.url}/update/${solIdsolicitud}`, obj).subscribe(res => console.log('Done editado'));
    }
  }
