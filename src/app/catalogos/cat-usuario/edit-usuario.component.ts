import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/cat.usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styles: []
})
export class EditUsuarioComponent implements OnInit {
  editForm: FormGroup;
  password: string;
  usuario: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: UsuarioService,
    private fb: FormBuilder) {
      this.createForm();
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.usuario = res;
      });
    });
  }

  createForm() {
    this.editForm = this.fb.group({
      usrUsername: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
      usrNombreUsuario: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
      usrPassword: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
      usrEmail: ['', [Validators.required, Validators.maxLength(250), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
      usrPerfil: ['', [Validators.required, Validators.maxLength(1), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
      usrTelefono: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
    });
  }

  updateBusiness(usrUsername, usrNombreUsuario, usrPassword, usrEmail,  usrPerfil, usrTelefono) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(usrUsername, usrNombreUsuario, usrPassword, usrEmail,  usrPerfil, usrTelefono, params['id']);
       this.router.navigate(['Usuarios']);
       swal({
        position: 'top',
        type: 'success',
        title: `Usuario modificada con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    });
    //this.update();
 }

 update(): void {
  window.location.reload();
}

 saveData() {
  alert(JSON.stringify(this.editForm.value));
}
}
