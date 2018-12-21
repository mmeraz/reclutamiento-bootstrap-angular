import { Component, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';
import { DataTableDirective } from 'angular-datatables';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { Subject } from 'rxjs';

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

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.solicitudService.getSolicitudesA().subscribe(result => {
      this.allSolicitud = result;
      this.dtTrigger.next();
    });
  }

}
