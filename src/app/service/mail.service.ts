import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class MailService {
  private url = 'http://localhost:4043'; // change URL
  constructor(private http: HttpClient) {
  }

  sendEmail(id) {
    return this
            .http
            .get(`${this.url}/Credit/mandaCorreo/${id}`).subscribe(res => console.log('Enviado')); // changes params
  }
}
