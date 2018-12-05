import { Component, OnInit } from '@angular/core';
import { Catperfil } from '../../model/catperfil.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PerfilService } from '../../service/cat.perfil.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-perfil',
  templateUrl: './create-perfil.component.html',
  styles: [],
  providers: [PerfilService]
})
export class CreatePerfilComponent implements OnInit {
  addForm: FormGroup;
  arrayPerfil: Catperfil[];
  selectPerfil: Catperfil;

  constructor(private perfilService: PerfilService,
    private fb: FormBuilder, private bs: PerfilService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.perfilService.getPerfiles().subscribe(
        (data: Catperfil[]) => this.arrayPerfil = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        perPerfil: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addperfil(perPerfil) {
      this.bs.addPerfil(perPerfil);
      swal({
        position: 'top',
        type: 'success',
        title: `Perfil creada con éxito`,
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
