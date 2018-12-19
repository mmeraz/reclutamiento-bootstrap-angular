import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cookie } from 'ng2-cookies';

import { Catestasolicitud } from '../model/catestasolicitud.model';


export class HabSolicitudService {
    private url = 'http://localhost:8085/api/v1/';
    private headers;
    constructor( private clienteHttp: HttpClient) {}

    getAreas() {
      this.getHeaders();
      return this.clienteHttp.get<Catestasolicitud[]>(this.url + '/fetch', {
        headers: this.headers});
    }

    addarea(estDescripcion) {
      this.getHeaders();
      const obj = {
        estDescripcion: estDescripcion
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

