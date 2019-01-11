import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';
import { DataTableDirective } from 'angular-datatables';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-a',
  templateUrl: './listado-a.component.html',
  styles: []
})
export class ListadoAComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayAreas: Catsolicitud;
  allSolicitud: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private solicitudService: SolicitudService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.solicitudService.getSolicitudesA().pipe(catchError( err => {
      if (err.status === 401) {
        this.update();
        this.auth.loguot();
        this.router.navigateByUrl('/login');
      } else {
          return throwError(err);
      }
 })).subscribe(result => {
      this.allSolicitud = result;
      this.dtTrigger.next();
    });
  }

  update(): void {
    window.location.reload();
  }

}
