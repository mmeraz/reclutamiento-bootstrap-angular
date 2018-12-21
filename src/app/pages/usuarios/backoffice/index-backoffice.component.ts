import { Component, OnInit } from '@angular/core';
import { SeguiSolicitudService } from '../../../service/cat.seguisolicitud.service';

@Component({
  selector: 'app-index-backoffice',
  templateUrl: './index-backoffice.component.html',
  styles: [],
  providers: [SeguiSolicitudService]
})
export class IndexBackofficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
