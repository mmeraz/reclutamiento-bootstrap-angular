import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catsolicitud } from '../model/catsolicitud.model';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CatSeguimientoSol } from '../model/catsegimientosolicitud.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
}
)
export class SeguimientoSolService {
  private url = 'http://localhost:8085/api/v1/seguimientosolicitud';
  private headers;

  constructor(private clienteHttp: HttpClient, private router: Router, private auth: AuthService) {}

  addValidar(solicitud: Catsolicitud, comentario: string) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 1,
        estDescripcion: 'Validada'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario,
      sgsComentario: comentario
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

  addRechazadaTI(solicitud: Catsolicitud, comentario: string) {
    this.getHeaders();
    const obj = {
      sgsIdseguimientosol: null,
      estEstatusSolicitud: {
        estIdestatus: 15,
        estDescripcion: 'Rechazada por TI'
      },
      solSolicitud: solicitud,
      usrUsuario: this.auth.usuario,
      sgsComentario: comentario
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

  getSgsSeguimientoSolicitudValidadas(nombre: string) {
    this.getHeaders(); // agregar
    return this.clienteHttp.get<CatSeguimientoSol>(`${this.url}/fetchActive/1/${nombre}`, {
      headers: this.headers});
  }

  getSgsSeguimientoSolicitudValidadasTI() {
    this.getHeaders(); // agregar
    return this.clienteHttp.get<CatSeguimientoSol>(`${this.url}/fetchActive/1`, {
      headers: this.headers});
  }

  getSgsSeguimientoSolicitudXValidar() {
    this.getHeaders(); // agregar
    return this.clienteHttp.get(this.url + '/fetchActive/10', {
      headers: this.headers});
  }

  getSgsSeguimientoAsignada() {
    this.getHeaders(); // agregar
    return this.clienteHttp.get(this.url + '/fetchActive/13', {
      headers: this.headers});
  }

  getSgsSeguimientoPendiente() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetchActive/14', {
      headers: this.headers});
  }

  getSgsSeguimietoRechazadas() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetchActive/15', {
      headers: this.headers});
  }

  getSgsSeguimietoBorrador() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetchActive/6', {
      headers: this.headers});
  }

  getSgsSeguimietoAceptadaXCliente() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetchActive/16', {
      headers: this.headers});
  }

  getSgsSeguimietoAceptadaXPerdida() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetchActive/17', {
      headers: this.headers});
  }

  getSgsSeguimietoEnEspera() {
    this.getHeaders();
    return this.clienteHttp.get(this.url + '/fetchActive/18', {
      headers: this.headers});
  }

  getSgsSeguimientoSolicitudAct() {
    this.getHeaders(); // agregar
    return this.clienteHttp.get(this.url + '/fetchActive', {
      headers: this.headers});
  }

  getSgsSeguimientoSolicitudByUser() {
    this.getHeaders(); // agregar
    return this.clienteHttp.get(`${this.url}/fetchByReclutador/${this.auth.usuario.usrUsuario}`, {
      headers: this.headers});
  }

  editBusiness(id): Observable<CatSeguimientoSol> {
    this.getHeaders();
    return this
            .clienteHttp
            .get<CatSeguimientoSol>(`${this.url}/fetch/${id}`, {
              headers: this.headers});
  }

  getHeaders() {
    this.headers = new HttpHeaders();
    this.headers = this.headers
    .append('Authorization', 'Bearer ' + Cookie
    .get('access_token'));
    return this.headers;
 }
}
