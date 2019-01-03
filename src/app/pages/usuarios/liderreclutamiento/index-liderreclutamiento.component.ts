import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-index-liderreclutamiento',
  templateUrl: './index-liderreclutamiento.component.html',
  styles: []
})
export class IndexLiderreclutamientoComponent implements OnInit {
  user$;
  constructor(protected authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.usuario;
  }

}
