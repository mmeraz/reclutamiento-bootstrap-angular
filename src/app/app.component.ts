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

  constructor(private usuarioService: UsuarioService, private authService: AuthService,
    private router: Router) {}
    //mostrarMenu: boolean = false;
    ngOnInit() {
     // this.authService.mostrarMenuEmitter.subscribe(
     //   mostrar => this.mostrarMenu = mostrar
     // );
  
  
    
    }

  logout() {
    this.authService.loguot();
  }
}
