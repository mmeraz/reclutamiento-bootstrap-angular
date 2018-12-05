import { Component, OnInit } from '@angular/core';
import { PrioridadService } from 'src/app/service/cat.prioridad.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { CatPrioridadComponent } from './cat-prioridad.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  prioridad: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: PrioridadService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        priNombre: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.prioridad = res;
      });
    });
  }
   updateBusiness(priNombre) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(priNombre, params['id']);
       this.router.navigate(['Prioridad']);
       swal({
        position: 'top',
        type: 'success',
        title: `Prioridad modificada con éxito`,
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
