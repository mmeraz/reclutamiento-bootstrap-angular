import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Catarea } from 'src/app/model/catarea.model';
import { AreaService } from 'src/app/service/cat.area.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

class Person {
  id: number;
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'app-cat-area',
  templateUrl: './cat-area.component.html',
  providers: [AreaService]
})
export class CatAreaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  arrayAreas: Catarea[];
  persons: Person[];

  constructor( private areaService: AreaService,
    private fb: FormBuilder, private bs: AreaService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    const that = this;

    // this.areaService.getAreas().subscribe(
    //   (data: Catarea[]) => this.arrayAreas = data
    // );

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'http://localhost:8085/api/v1/areaNegocio/fetch',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.arrayAreas = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'arnIdarean' }, { data: 'arnTipo' }]
    };
  }


  deleteBusiness(id) {
      swal({
        title: 'Está seguro?',
      text: `¿Seguro desea eliminar al área ${id}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.areaService.deleteBusiness(id).subscribe(data => {
            this.arrayAreas = this.arrayAreas.filter(c => c !== id);
          });
          swal('Eliminado!', 'Se ha eliminado el área.', 'success');
        }
      });
      console.log('Deleted');
  }

}
