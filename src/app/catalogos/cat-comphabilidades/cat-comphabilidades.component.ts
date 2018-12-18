import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catcomphabilidades } from 'src/app/model/catcomphabilidades.model';
import { CompHabilidadesService } from 'src/app/service/cat.comphabilidades.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-cat-comphabilidades',
  templateUrl: './cat-comphabilidades.component.html',
  providers: [CompHabilidadesService]
})
export class CatComphabilidadesComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayComphabibilidades: Catcomphabilidades[];
  allComphabilidades: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private comphabilidadesService: CompHabilidadesService,
    private fb: FormBuilder, private bs: CompHabilidadesService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.comphabilidadesService.getCompHabilidades().subscribe(result => {
      this.allComphabilidades = result;
      this.dtTrigger.next();
    });
    console.log(this.allComphabilidades);
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.comphabilidadesService.getCompHabilidades().subscribe(result => {
        this.allComphabilidades = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, cohDescripcion) {
      swal({
        title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la habilidad ${cohDescripcion}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.comphabilidadesService.deleteBusiness(id).subscribe(data => {
            this.allComphabilidades = this.allComphabilidades.filter(c => c.cohIdcompetencia !== id);
          });
          swal('Eliminado!', 'Se ha eliminado la competencia.', 'success');
          this.rerender();
        }
      });
  }

}
