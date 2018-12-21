import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catsolicitud } from '../model/catsolicitud.model';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
}
)
export class SeguimientoSolService {
  private url = 'http://localhost:8085/api/v1/seguimientosolicitud';
  private headers;

  constructor(private clienteHttp: HttpClient, private router: Router, private auth: AuthService) {}

  addValidar(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 1,
        estDescripcion: 'Validada'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addBorrador(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 6,
        estDescripcion: 'Borrador'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addCacelada(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 6,
        estDescripcion: 'Borrador'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addPendienteTI(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 10,
        estDescripcion: 'pendiente de validacion TI'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addPorAsigar(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 12,
        estDescripcion: 'Por Asignar'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addAsigna(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 13,
        estDescripcion: 'Asignada'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addPendienteRespuesta(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 14,
        estDescripcion: 'Pendiente de respuesta'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addRechazadaTI(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 15,
        estDescripcion: 'Rechazada por TI'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addAceptadoCliente(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 16,
        estDescripcion: 'Aceptado por cliente'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addPerdida(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 17,
        estDescripcion: 'Perdida'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
     this.clienteHttp.post(this.url + '/add', obj, {
       headers: this.headers})
         .subscribe(res => console.log('Done'));
  }

  addEnEspera(solicitud: Catsolicitud) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 18,
        estDescripcion: 'En espera'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario
    };
    console.log(obj.usrUsuario.usrUsuario);
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
