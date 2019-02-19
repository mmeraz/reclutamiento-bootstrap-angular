import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-index-backoffice',
  templateUrl: './index-backoffice.component.html',
  styles: []
})
export class IndexBackofficeComponent implements OnInit {
  user$;
  constructor(protected authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.usuario;
  }

}
