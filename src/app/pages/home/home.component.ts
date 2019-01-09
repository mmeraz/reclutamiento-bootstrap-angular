import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user$;
  constructor(protected authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.usuario;
  }

}
