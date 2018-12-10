import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catsolicitud } from '../model/catsolicitud.model';

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
  }
