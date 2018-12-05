import { Component, OnInit } from '@angular/core';
import { Catprioridad } from '../../model/catprioridad.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PrioridadService } from '../../service/cat.prioridad.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-prioridad',
  templateUrl: './create-prioridad.component.html',
  styles: [],
  providers: [PrioridadService]
})
export class CreatePrioridadComponent implements OnInit {

  addForm: FormGroup;
  arrayPrioridad: Catprioridad[];
  selectPrioridad: Catprioridad;

  constructor(private prioridadService: PrioridadService,
    private fb: FormBuilder, private bs: PrioridadService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.prioridadService.getPrioridads().subscribe(
        (data: Catprioridad[]) => this.arrayPrioridad = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        priNombre: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addprioridad(priNombre) {
      this.bs.addprioridad(priNombre);
      swal({
        position: 'top',
        type: 'success',
        title: `Prioridad creada con éxito`,
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
