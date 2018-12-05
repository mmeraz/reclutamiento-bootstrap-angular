import { Component, OnInit } from '@angular/core';
import { PrePercepcionService } from 'src/app/service/cat.prepercepcion.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { CatPrepercepcionComponent } from './cat-prepercepcion.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  area: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: PrePercepcionService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        preTipo: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.area = res;
      });
    });
  }
   updateBusiness(preTipo) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(preTipo, params['id']);
       this.router.navigate(['Area']);
       swal({
        position: 'top',
        type: 'success',
        title: `Precepcion modificada con éxito`,
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
