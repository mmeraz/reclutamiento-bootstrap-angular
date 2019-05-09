import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from 'src/app/service/cat.perfil.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styles: []
})
export class EditPerfilComponent implements OnInit {
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
       swal({
        position: 'top',
        type: 'success',
        title: `Perfil modificado con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.update();
 }

 update(): void {
  setTimeout(() => {
    this.router.navigate(['Perfil']);
  }, 500);
}

 saveData() {
  alert(JSON.stringify(this.editForm.value));
}

}
