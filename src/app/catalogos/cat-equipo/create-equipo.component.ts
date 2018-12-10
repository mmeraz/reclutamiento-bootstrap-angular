import { Component, OnInit } from '@angular/core';
import { Catequipo } from '../../model/catequipo.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { EquipoService } from '../../service/cat.equipo.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-equipo',
  templateUrl: './create-equipo.component.html',
  styles: [],
  providers: [EquipoService]
})
export class CreateEquipoComponent implements OnInit {

  addForm: FormGroup;
  arrayEquipo: Catequipo[];
  selectEquipo: Catequipo;

  constructor(private equipoService: EquipoService,
    private fb: FormBuilder, private bs: EquipoService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.equipoService.getEquipos().subscribe(
        (data: Catequipo[]) => this.arrayEquipo = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        equNombre: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ],
        equDescripcion: ['', [Validators.required, Validators.maxLength(120), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addequipo(equNombre, equDescripcion) {
      this.bs.addequipo(equNombre, equDescripcion);
      swal({
        position: 'top',
        type: 'success',
        title: `Equipo creada con éxito`,
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
