import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { Subject } from 'rxjs';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';

@Component({
  selector: 'app-listado-m',
  templateUrl: './listado-m.component.html',
  styles: []
})
export class ListadoMComponent implements OnInit {
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
    this.solicitudService.getSolicitudesM().subscribe(result => {
      this.allSolicitud = result;
      this.dtTrigger.next();
    });
  }

}
