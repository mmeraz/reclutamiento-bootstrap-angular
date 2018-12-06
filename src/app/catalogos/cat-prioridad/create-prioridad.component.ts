import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

import { PrioridadService } from 'src/app/service/cat.prioridad.service';

import { Catprioridad } from 'src/app/model/catprioridad.model';

@Component({
  selector: 'app-create-prioridad',
  templateUrl: './create-prioridad.component.html',
  providers: [PrioridadService]
})
export class CreatePrioridadComponent implements OnInit {
  addForm: FormGroup;
  arrayPrioridad: Catprioridad[];
  selecPrioridad: Catprioridad;

  constructor(private areaService: PrioridadService,
    private fb: FormBuilder, private bs: PrioridadService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.areaService.getPrioridades().subscribe(
        (data: Catprioridad[]) => this.arrayPrioridad = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        priNombre: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addPrioridad(priNombre) {
      this.bs.addprioridad(priNombre);
      swal({
        position: 'top',
        type: 'success',
        title: `Área creada con éxito`,
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

