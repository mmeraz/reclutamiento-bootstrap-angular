import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';



@Component({
 selector: 'app-navbar',
 templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
 user$;
 public catalogos: Array<{path: string, titulo: string }>;

 constructor(protected authService: AuthService) {
   this.catalogos = [
     {path: 'Area',  titulo: 'Area' },
     {path: 'Cliente', titulo: 'Cliente' },
     {path: 'Habilidades',  titulo: 'Habilidades' },
     {path: 'Contacto-cliente',  titulo: 'Contacto Cliente' },
     {path: 'Conocimientos-tecnicos',  titulo: 'Conocimientos Técnicos' },
     {path: 'Entrevista',  titulo: 'Entrevista' },
     {path: 'Equipo',  titulo: 'Equipo' },
     {path: 'Estatus-candidato',  titulo: 'Estatus Candidato' },
     {path: 'Estatus-solicitud',  titulo: 'Estatus solicitud' },
     {path: 'Idioma',  titulo: 'Idioma' },
     {path: 'Jornada-laboral',  titulo: 'Jornada Laboral' },
     {path: 'Perfil',  titulo: 'Perfíl' },
     {path: 'Pre-percepcion',  titulo: 'Prepercepción' },
     {path: 'Prioridad',  titulo: 'Prioridad' },
     // {path: 'Tipo-vacante',  titulo: 'Tipo Vacante' },
     {path: 'Usuarios',  titulo: 'Usuarios' }
   ];
 }

ngOnInit() {
   this.user$ = this.authService.usuario;
}

}
