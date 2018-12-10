import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catprepercepcion } from 'src/app/model/catprepercepcion.model';
import { PrePercepcionService } from 'src/app/service/cat.prepercepcion.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-cat-prepercepcion',
  templateUrl: './cat-prepercepcion.component.html',
  providers: [PrePercepcionService]
})
export class CatPrepercepcionComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayPercepcion: Catprepercepcion[];
  allPercepcion: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private precepcionService: PrePercepcionService,
    private fb: FormBuilder, private bs: PrePercepcionService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.precepcionService.getPercepciones().subscribe(result => {
      this.allPercepcion = result;
      this.dtTrigger.next();
    });
    console.log(this.allPercepcion);
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.precepcionService.getPercepciones().subscribe(result => {
        this.allPercepcion = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, preTipo) {
      swal({
        title: 'Está seguro?',
      text: `¿Seguro desea eliminar al precepcion ${preTipo}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.precepcionService.deleteBusiness(id).subscribe(data => {
            this.allPercepcion = this.allPercepcion.filter(c => c.preIdprestaciones !== id);
          });
          swal('Eliminado!', 'Se ha eliminado la precepcion.', 'success');
          this.rerender();
        }
      });
  }

}
