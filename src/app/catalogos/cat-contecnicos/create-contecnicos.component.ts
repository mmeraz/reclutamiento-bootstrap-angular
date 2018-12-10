import { Component, OnInit } from '@angular/core';
import { Catcontecnicos } from '../../model/catcontecnicos.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ConTecnicosService } from '../../service/cat.contecnicos.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-contecnicos',
  templateUrl: './create-contecnicos.component.html',
  styles: [],
  providers: [ConTecnicosService]
})
export class CreateContecnicosComponent implements OnInit {

  addForm: FormGroup;
  arrayContecnicos: Catcontecnicos[];
  selectContecnicos: Catcontecnicos;

  constructor(private contecnicosService: ConTecnicosService,
    private fb: FormBuilder, private bs: ConTecnicosService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.contecnicosService.getCotecnicoss().subscribe(
        (data: Catcontecnicos[]) => this.arrayContecnicos = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        cotTipo: ['', [Validators.required, Validators.maxLength(1), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ],
        cotConocimiento: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addcotecnicos(cotTipo, cotConocimiento) {
      this.bs.addcotecnicos(cotTipo, cotConocimiento);
      swal({
        position: 'top',
        type: 'success',
        title: `Conocimiento técnico creado con éxito`,
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
