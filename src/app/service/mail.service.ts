import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class MailService {
  private url = 'http://localhost:8085/api/v1/mail'; // change URL
  constructor(private http: HttpClient) {
  }

  sendEmail(id, object) {
    return this
            .http
            .post(`${this.url}/sendMail/${id}`, object).subscribe(res => console.log('Enviado')); // changes params
  }
}
