import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catdoccandidato} from '../model/catdoccandidato.model';

@Injectable({
  providedIn: 'root'
}
)

export class DocumentosService {
    private url = 'http://localhost:8085/api/v1/';

    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      return this.clienteHttp.get<Catdoccandidato[]>(this.url + '/fetch');
    }

    addarea(cndNombre, cndApellidoPat, cndApellidoMat, cndCalle, cndNumext, cndNumint,
      cndCodpostal, cndColonia, cndMunicipio, cndEstado, cndPais, cndEdad, cndEstcivil, cndEmail,
      cndHijos, cndDispoviajar, cndVisa, cndPasaporte, cndTrabaja, cndDisponibildiad, cndDispotrabajo, cndGenero ) {
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
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }


  }

