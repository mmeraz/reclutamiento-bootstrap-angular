import { Component, OnInit } from '@angular/core';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { SeguimientoCandService } from '../../../service/seguimientocandidato.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-index-tivalidacion',
  templateUrl: './index-tivalidacion.component.html',
  styles: []
})
export class IndexTivalidacionComponent implements OnInit {
  numer: number;
  number1: number;
  allAreas: any = [];
  allCandXValidar: any = [];
  constructor(private serviceSgsSolicitud: SeguimientoSolService,
              private serviceSecCandidato: SeguimientoCandService, private router: Router, private auth: AuthService) {
               }

  ngOnInit() {
    this.serviceSgsSolicitud.getSgsSeguimientoSolicitudXValidar().subscribe(result => {
      this.allAreas = result;
    });
    this.numer = this.allAreas.length;

    this.serviceSecCandidato.getSecSeguimientoPendienteValidacion().pipe(catchError( err => {
      if (err.status === 401) {
        this.refresh();
        this.auth.loguot();
        this.router.navigateByUrl('/login');
      } else {
          return throwError(err);
      }
 })).subscribe(result => {
      this.allCandXValidar = result;
    });
    this.number1 = this.allCandXValidar.length;
    console.log(this.number1);
  }

  refresh(): void {
    window.location.reload();
 }

}
