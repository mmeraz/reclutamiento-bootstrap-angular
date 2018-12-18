import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { Subject } from 'rxjs';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';

@Component({
  selector: 'app-listado-b',
  templateUrl: './listado-b.component.html',
  styles: []
})
export class ListadoBComponent implements OnInit {
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
    this.solicitudService.getSolicitudesB().subscribe(result => {
      this.allSolicitud = result;
      this.dtTrigger.next();
    });
  }

}
