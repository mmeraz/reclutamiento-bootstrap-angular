import { Component, OnInit, ViewChild } from '@angular/core';
import { SeguimientoSolService } from 'src/app/service/seguimientosol.service';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from 'src/app/model/catsegimientosolicitud.model';
import { Subject, throwError } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceptados-comercial',
  templateUrl: './aceptados-comercial.component.html',
  styles: []
})
export class AceptadosComercialComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayAreas: CatSeguimientoSol[];
  allSeguimiento: any = [];
  dtTrigger: Subject<any> = new Subject();
  constructor(private serviceSgsSolicitud: SeguimientoSolService,
    protected authservice: AuthService, private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.serviceSgsSolicitud.getSgsSeguimientoSolicitudValidadas('Baja').pipe(catchError( err => {
      if (err.status === 401) {
        this.update();
        this.authservice.loguot();
        this.router.navigateByUrl('/login');
      } else {
          return throwError(err);
      }
 })).subscribe(result => {
      this.allSeguimiento = result;
      this.dtTrigger.next();
    });
  }

  getListSize(): number {
    return 0;
  }

  update(): void {
    window.location.reload();
  }

}
