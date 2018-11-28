import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Catestasolicitud } from '../model/catestasolicitud.model';


export class HabSolicitudService {
    private url = 'http://localhost:8085/api/v1/';
    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      return this.clienteHttp.get<Catestasolicitud[]>(this.url + '/fetch');
    }

    addarea(estDescripcion) {
      const obj = {
        estDescripcion: estDescripcion
      };
      this.clienteHttp.post(this.url + '/add', obj)
          .subscribe(res => console.log('Done'));
    }


  }

