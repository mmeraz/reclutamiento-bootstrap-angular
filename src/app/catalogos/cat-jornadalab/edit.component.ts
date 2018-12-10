import { Component, OnInit } from '@angular/core';
import { JornadaLAbService } from 'src/app/service/cat.jornadalab.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { CatJornadalabComponent } from './cat-jornadalab.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditJornadaComponent implements OnInit {

  editForm: FormGroup;
  jornada: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: JornadaLAbService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        jolTipo: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.jornada = res;
      });
    });
  }
   updateBusiness(jolTipo) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(jolTipo, params['id']);
       this.router.navigate(['Jornada-laboral']);
       swal({
        position: 'top',
        type: 'success',
        title: `jornada modificada con éxito`,
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
