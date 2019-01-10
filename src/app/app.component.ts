import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/service/cat.usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reclutamiento-angular';

  constructor(private usuarioService: UsuarioService, protected authService: AuthService,
    private router: Router) {}



  logout() {
    this.rerender();
    this.authService.loguot();
    this.router.navigate(['/login']);
  }
  rerender(): void {
    window.location.reload();
  }
}
