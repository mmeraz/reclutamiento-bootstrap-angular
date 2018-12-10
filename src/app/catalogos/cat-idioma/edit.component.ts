import { Component, OnInit } from '@angular/core';
import { IdiomaService } from 'src/app/service/cat.idioma.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { CatIdiomaComponent } from './cat-idioma.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
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
       this.router.navigate(['Idioma']);
       swal({
        position: 'top',
        type: 'success',
        title: `Idioma modificada con éxito`,
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
