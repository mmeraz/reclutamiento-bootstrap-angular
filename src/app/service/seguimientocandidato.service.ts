import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Catcandidato } from '../model/catcandidato.model';
import { Cookie } from 'ng2-cookies';
import { Catseguicandidato } from '../model/catseguicandidato.model';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoCandService {
  private url = 'http://localhost:8085/api/v1/seguimientocandidato';
  private headers;

  constructor(
    private clienteHttp: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}

  addValidar(candidato: Catcandidato, comentario: string) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
        escIdestatus: 13,
        escDescripcion: 'Validado'
      },
      usrUsuario: this.auth.usuario,
      secComentario: comentario
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addBorrador(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 10,
      escDescripcion: 'Borrador'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addRechazado(candidato: Catcandidato, secComentario: string) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 9,
      escDescripcion: 'Rechazado por TI'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addPendienteTI(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 12,
      escDescripcion: 'pendiente de validacion TI'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addPendienteEntrevista(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 13,
      escDescripcion: 'pendiente entrevista'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addEntrevistaAgendada(candidato: Catcandidato, comentario: string) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 14,
      escDescripcion: 'entrevista agendada'
      },
      secComentario: comentario,
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addEntrevistado(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 15,
      escDescripcion: 'entrevistado'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addRechazadoXCliente(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 16,
      escDescripcion: 'rechazado por cliente'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addAceptado(candidato: Catcandidato, comentario: string  ) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 17,
      escDescripcion: 'aceptado'
      },
      secComentario: comentario,
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addRechazadoXCandidato(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 18,
      escDescripcion: 'rechazado por candidato'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addPendienteDocumentacion(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 19,
      escDescripcion: 'pendiente documentacion'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addPendienteContrato(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 20,
      escDescripcion: 'pendiente de contrato'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addContratado(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 21,
      escDescripcion: 'contratado'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  addAsignable(candidato: Catcandidato) {
    this.getHeaders();
    const obj = {
      secIdseguimientocandidato: null,
      cndDatoscandidato: candidato,
      escEstatusCandidato: {
      escIdestatus: 22,
      escDescripcion: 'asignable'
      },
      usrUsuario: this.auth.usuario,
    };
    console.log(obj.usrUsuario.usrUsuario);
    this.clienteHttp
      .post(this.url + '/add', obj, { headers: this.headers })
      .subscribe(res => console.log('Done'));
  }

  getSecSeguimientoCandidatoValidados(nombre: string) {
    this.getHeaders();
    return this.clienteHttp.get<Catseguicandidato>(`${this.url}/fetchActive/1/${nombre}`,
       {headers: this.headers});
  }

  getSecSeguimientoCandidatoValidadosTI() {
    this.getHeaders();
    return this.clienteHttp.get<Catseguicandidato>(`${this.url}/fetchActive/1`,
       {headers: this.headers});
  }
  getSecSeguimientoActivo() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/1`,
       {headers: this.headers});
  }

  getSecSeguimientoActivoAll() {
    this.getHeaders();
    return this.clienteHttp.get<Catseguicandidato[]>(`${this.url}/fetchActive`,
       {headers: this.headers});
  }
  getSecSeguimientoEntrevista() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/3`,
       {headers: this.headers});
  }
  getSecSeguimientoRechazadoTI() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/9`,
       {headers: this.headers});
  }

  getSecSeguimientoBorrador() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/10`,
       {headers: this.headers});
  }
  getSecSeguimientoPendienteValidacion() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/12`,
       {headers: this.headers});
  }
  getSecSeguimientoPendienteEntrevista() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/13`,
       {headers: this.headers});
  }
  getSecSeguimientoEntrevistaAgendada() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/14`,
       {headers: this.headers});
  }
  getSecSeguimientoEntrevistado() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/15`,
       {headers: this.headers});
  }
  getSecSeguimientoRechazadoXCliente() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/16`,
       {headers: this.headers});
  }
  getSecSeguimientoAceptado() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/17`,
       {headers: this.headers});
  }
  getSecSeguimientoRechazadoXCandidato() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/18`,
       {headers: this.headers});
  }
  getSecSeguimientoPendienteDocumentacion() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/19`,
       {headers: this.headers});
  }
  getSecSeguimientoPendienteContrato() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/20`,
       {headers: this.headers});
  }
  getSecSeguimientoContratado() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/21`,
       {headers: this.headers});
  }
  getSecSeguimientoAsignable() {
    this.getHeaders();
    return this.clienteHttp.get(`${this.url}/fetchActive/22`,
       {headers: this.headers});
  }
  getHeaders() {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append(
      'Authorization',
      'Bearer' + Cookie.get('access_token')
    );
    return this.headers;
  }
}

