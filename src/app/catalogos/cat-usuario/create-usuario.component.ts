import { Component, OnInit } from '@angular/core';
import { Catusuario } from '../../model/catusuario.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UsuarioService } from '../../service/cat.usuario.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styles: [],
  providers: [UsuarioService]
})
export class CreateUsuarioComponent implements OnInit {

  addForm: FormGroup;
  arrayUsuarios: Catusuario[];
  selectUsuario: Catusuario;

  constructor(private usuarioService: UsuarioService,
    private fb: FormBuilder, private bs: UsuarioService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.usuarioService.getUsuarios().subscribe(
        (data: Catusuario[]) => this.arrayUsuarios = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        usrUsername: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
        usrNombreusuario: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
        usrPassword: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
        usrEmail: ['', [Validators.required, Validators.maxLength(250), Validators.pattern('^[a-zA-Z@.]*$')] ] ,
        usrPerfil: ['', [Validators.required, Validators.maxLength(1), Validators.pattern('^[ARCLVB]*$')] ] ,
        usrTelefono: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]*$')] ] ,
      });
    }


    addusuario(usrUsername, usrNombreusuario , usrPassword , usrEmail, usrPerfil , usrTelefono ) {
      this.bs.addusuario(usrUsername, usrNombreusuario , usrPassword , usrEmail, usrPerfil , usrTelefono);
      swal({
        position: 'top',
        type: 'success',
        title: `Usuario creado con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
      this.update();
    }

    update(): void {
      window.location.reload();
    }

    saveData() {
      alert(JSON.stringify(this.addForm.value));
    }

}

