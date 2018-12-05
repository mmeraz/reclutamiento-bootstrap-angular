import { Component, OnInit } from '@angular/core';
import { EquipoService } from 'src/app/service/cat.equipo.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { CatEquipoComponent } from './cat-equipo.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  area: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: EquipoService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        equNombre: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
        equDescripcion: ['', [Validators.required, Validators.maxLength(120), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
      });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.area = res;
      });
    });
  }
   updateBusiness( equDescripcion, equNombre) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(equDescripcion, equNombre, params['id']);
       this.router.navigate(['Equipo']);
       swal({
        position: 'top',
        type: 'success',
        title: `Equipo modificada con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.update();
 }

 update(): void {
  window.location.reload();
}

 saveData() {
  alert(JSON.stringify(this.editForm.value));
}


}
