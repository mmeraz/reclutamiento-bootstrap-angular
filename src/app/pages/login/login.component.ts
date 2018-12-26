import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { LoginService } from '../../service/login.service';
import { Catusuario } from 'src/app/model/catusuario.model';
import swal from 'sweetalert2';
import { AuthService } from 'src/app/service/auth.service';
import { Cookie, CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: 'Iniciar Sesión';
  usuario: Catusuario;
  constructor(private authService: AuthService, private router: Router) {
    this.usuario = {
        usrUsuario : 0,
        usrUsername: '',
        usrNombreusuario: '',
        usrPassword: '',
        usrEmail: '',
        usrPerfil: '',
        usrTelefono: '',
        roles: []
    };
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }

  }

  login(): void {
    if (this.usuario.usrUsername === '' || this.usuario.usrPassword === '') {
      swal('Error Login', 'Nombre de usuario o contraseña vacios', 'error');
      return;
    }
    this.authService.login(this.usuario).subscribe(response => {
      this.saveToken(response);
      this.authService.Guardartoken(response.access_token);
      this.authService.Guardarusuario(response.access_token);
      console.log(this.authService.Guardarusuario);
    }, err => {
      if (err.status === 401) {
        swal('Error Login', 'Nombre de usuario o contraseña Incorrecta', 'error');
      }
    }
    );
  }

  saveToken(token) {
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    console.log('Obtained Access token');
    this.router.navigate(['/IndexComercial']);
    this.rerender();
  }
  rerender(): void {
    window.location.reload();
  }
}
