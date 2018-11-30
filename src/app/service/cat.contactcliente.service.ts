import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { Catcontactcliente} from '../model/catcontactcliente.model';
import { Catcliente} from '../model/catcliente.model';

@Injectable({
  providedIn: 'root'
}
)
export class ContactClienteService {

    private url = 'http://localhost:8085/api/v1/cliente';
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor( private clienteHttp: HttpClient) {}

    getContactcliente(): Observable<Catcliente[]> {
      return this.clienteHttp.get(this.url + '/fetch').pipe(
        map(contacto => contacto as Catcliente[])
      );


    }

  }
