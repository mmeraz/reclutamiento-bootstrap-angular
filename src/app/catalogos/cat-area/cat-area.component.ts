import { Component, OnInit, Input } from '@angular/core';
import { Catarea } from 'src/app/model/catarea.model';
import { AreaService } from 'src/app/service/cat.area.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cat-area',
  templateUrl: './cat-area.component.html',
  providers: [AreaService]
})
export class CatAreaComponent implements OnInit {
  arrayAreas: Catarea[];
  selectArea: Catarea;

  constructor( private areaService: AreaService,
    private fb: FormBuilder, private bs: AreaService,
    private activatedRoute: ActivatedRoute) {
    }

  ngOnInit() {
    this.areaService.getAreas().subscribe(
      (data: Catarea[]) => this.arrayAreas = data
    );
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
