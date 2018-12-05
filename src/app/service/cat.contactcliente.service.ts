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
    private urll = 'http://localhost:8085/api/v1/clcContacto';
    private httpHeaders = new HttpHeaders({ 'ContentType': 'application/json' });

    constructor( private clienteHttp: HttpClient) {}

    getContactcliente() {
      return this.clienteHttp.get(this.url + '/fetchAll');
    }

    addcontacto( cliIdcliente, clcNombre, clcTelefono, clcEmail, clcTipo, clcExtension) {
      const obj = {
        cliCliente: {
          cliIdcliente: cliIdcliente
        },
        clcNombre: clcNombre,
        clcTelefono: clcTelefono,
        clcEmail: clcEmail,
        clcTipo: clcTipo,
        clcExtension: clcExtension
      };
      this.clienteHttp.post(this.urll + '/add', obj)
          .subscribe(res => console.log('Done'));
    }

    editBusiness(id) {
      return this
              .clienteHttp
              .get(`${this.url}/fetch/${id}`);
      }
      editBusinessc(id) {
        return this
                .clienteHttp
                .get(`${this.urll}/fetch/${id}`);
        }

    updateBusiness( clcNombre, clcTelefono, clcEmail, clcTipo, clcExtension, clcIdconcli) {
      clcIdconcli = clcIdconcli;
      const obj = {
        clcNombre: clcNombre,
        clcTelefono: clcTelefono,
        clcEmail: clcEmail,
        clcTipo: clcTipo,
        clcExtension: clcExtension
      };
      this
        .clienteHttp
        .put(`${this.urll}/update/${clcIdconcli}`, obj)
        .subscribe(res => console.log('Done editado'));
    }
    deleteBusiness(id) {
      return this
                .clienteHttp
                .delete(`${this.urll}/delete/${id}`);
    }




  }
