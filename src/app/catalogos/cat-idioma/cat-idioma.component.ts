import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catidioma } from 'src/app/model/catidioma.model';
import { IdiomaService } from 'src/app/service/cat.idioma.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-cat-idioma',
  templateUrl: './cat-idioma.component.html',
  providers: [IdiomaService]
})
export class CatIdiomaComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayIdioma: Catidioma[];
  allIdioma: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private idiomaService: IdiomaService,
    private fb: FormBuilder, private bs: IdiomaService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.idiomaService.getIdiomass().subscribe(result => {
      this.allIdioma = result;
      this.dtTrigger.next();
    });
    console.log(this.allIdioma);
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.idiomaService.getIdiomass().subscribe(result => {
        this.allIdioma = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, idiNombre) {
      swal({
        title: 'Está seguro?',
      text: `¿Seguro desea eliminar el idioma ${idiNombre}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.idiomaService.deleteBusiness(id).subscribe(data => {
            this.allIdioma = this.allIdioma.filter(c => c.idiIdioma !== id);
          });
          swal('Eliminado!', 'Se ha eliminado el idioma.', 'success');
          this.rerender();
        }
      });
  }

}
