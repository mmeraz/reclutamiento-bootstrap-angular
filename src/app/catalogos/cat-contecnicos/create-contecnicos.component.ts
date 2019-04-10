import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Catcontecnicos } from 'src/app/model/catcontecnicos.model';
import { ConTecnicosService } from 'src/app/service/cat.contecnicos.service';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-contecnicos',
  templateUrl: './create-contecnicos.component.html',
  styles: []
})
export class CreateContecnicosComponent implements OnInit {

  addForm: FormGroup;
  arrayConTecnicos: Catcontecnicos[];
  selectArea: Catcontecnicos;

  constructor(private areaService: ConTecnicosService,
    private fb: FormBuilder, private bs: ConTecnicosService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.areaService.getContecnicos().subscribe(
        (data: Catcontecnicos[]) => this.arrayConTecnicos = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        cotConocimiento: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
        cotTipo: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
      });
    }


    addcontecnicos(cotConocimiento, cotTipo) {
      this.bs.addcontecnicos(cotConocimiento, cotTipo);
      swal({
        position: 'top',
        type: 'success',
        title: `El contacto técnico fue creado con éxito`,
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
