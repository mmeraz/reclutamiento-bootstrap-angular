import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Catusuario } from '../model/catusuario.model'

@Injectable({ providedIn: 'root' })
export class LoginService {

    private url = 'http://localhost:8085/api/v1/Usuario';

    private currentUserSubject: BehaviorSubject<Catusuario>;
    public currentUser: Observable<Catusuario>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Catusuario>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Catusuario {
        return this.currentUserSubject.value;
    }

    login(usrEmail, usrPassword) {
        return this.http.post<any>(this.url + '/login', { usrEmail, usrPassword })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
