import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { CatSeguimientoSol } from '../../../../../../model/catsegimientosolicitud.model';
import { Subject, throwError } from 'rxjs';
import { AuthService } from '../../../../../../service/auth.service';
import { SeguimientoSolService } from '../../../../../../service/seguimientosol.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-media-aceptado',
  templateUrl: './media-aceptado.component.html',
  styles: []
})
export class MediaAceptadoComponent implements OnInit {
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
    this.serviceSgsSolicitud.getSgsSeguimientoSolicitudValidadas('Media').pipe(catchError( err => {
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
