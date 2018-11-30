import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catarea } from 'src/app/model/catarea.model';
import { AreaService } from 'src/app/service/cat.area.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-cat-area',
  templateUrl: './cat-area.component.html',
  providers: [AreaService]
})
export class CatAreaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  arrayAreas: Catarea[];
  allAreas: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private areaService: AreaService,
    private fb: FormBuilder, private bs: AreaService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.areaService.getAreas().subscribe(result => {
      this.arrayAreas = result;
      this.dtTrigger.next();
    });
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
