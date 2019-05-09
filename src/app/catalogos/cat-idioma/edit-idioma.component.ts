import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/cat.idioma.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-idioma',
  templateUrl: './edit-idioma.component.html'
})
export class EditIdiomaComponent implements OnInit {
  editForm: FormGroup;
  idioma: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: IdiomaService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        idiNombre: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.idioma = res;
      });
    });
  }
   updateBusiness(idiNombre) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(idiNombre, params['id']);
       swal({
        position: 'top',
        type: 'success',
        title: `Idioma modificado con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.update();
 }

 update(): void {
  setTimeout(() => {
    this.router.navigate(['Idioma']);
  }, 500);
}

 saveData() {
  alert(JSON.stringify(this.editForm.value));
}


}
