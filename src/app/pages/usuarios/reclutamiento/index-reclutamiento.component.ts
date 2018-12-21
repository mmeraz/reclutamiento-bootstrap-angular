import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-index-reclutamiento',
  templateUrl: './index-reclutamiento.component.html',
  styles: []
})
export class IndexReclutamientoComponent implements OnInit {
  user$;
  constructor(protected authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.usuario;
  }

}
