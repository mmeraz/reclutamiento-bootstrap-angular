import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-index-comercial',
  templateUrl: './index-comercial.component.html',
  styles: []
})
export class IndexComercialComponent implements OnInit {
  user$;
  constructor(protected authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.usuario;
  }

}
