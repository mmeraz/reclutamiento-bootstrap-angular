import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/service/cat.perfil.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { CatPerfilComponent } from './cat-perfil.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  perfil: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: PerfilService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        perPerfil: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.perfil = res;
      });
    });
  }
   updateBusiness(perPerfil) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(perPerfil, params['id']);
       this.router.navigate(['Perfil']);
       swal({
        position: 'top',
        type: 'success',
        title: `Perfil modificada con éxito`,
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
