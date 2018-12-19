import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cookie } from 'ng2-cookies';

import { Catdoccandidato} from '../model/catdoccandidato.model';

@Injectable({
  providedIn: 'root'
}
)

export class DocumentosService {
    private url = 'http://localhost:8085/api/v1/';
    private headers;

    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      this.getHeaders();
      return this.clienteHttp.get<Catdoccandidato[]>(this.url + '/fetch', {
        headers: this.headers});
    }

    addarea(cndNombre, cndApellidoPat, cndApellidoMat, cndCalle, cndNumext, cndNumint,
      cndCodpostal, cndColonia, cndMunicipio, cndEstado, cndPais, cndEdad, cndEstcivil, cndEmail,
      cndHijos, cndDispoviajar, cndVisa, cndPasaporte, cndTrabaja, cndDisponibildiad, cndDispotrabajo, cndGenero ) {
        this.getHeaders();
        const obj = {
        cndNombre: cndNombre,
        cndApellidoPat: cndApellidoPat,
        cndApellidoMat: cndApellidoMat,
        cndCalle: cndCalle,
        cndNumext: cndNumext,
        cndNumint: cndNumint,
        cndCodpostal: cndCodpostal,
        cndColonia: cndColonia,
        cndMunicipio: cndMunicipio,
        cndEstado: cndEstado,
        cndPais: cndPais,
        cndEdad: cndEdad,
        cndEstcivil: cndEstcivil,
        cndEmail: cndEmail,
        cndHijos: cndHijos,
        cndDispoviajar: cndDispoviajar,
        cndVisa: cndVisa,
        cndPasaporte: cndPasaporte,
        cndTrabaja: cndTrabaja,
        cndDisponibildiad: cndDisponibildiad,
        cndDispotrabajo: cndDispotrabajo,
        cndGenero: cndGenero
      };
      this.clienteHttp.post(this.url + '/add', obj, {
        headers: this.headers})
          .subscribe(res => console.log('Done'));
    }
    getHeaders() {
      this.headers = new HttpHeaders();
      this.headers = this.headers
      .append('Authorization', 'Bearer ' + Cookie
      .get('access_token'));
      return this.headers;
   }

  }

