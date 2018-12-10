import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Catequipo } from 'src/app/model/catequipo.model';
import { EquipoService } from 'src/app/service/cat.equipo.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-equipo',
  templateUrl: './create-equipo.component.html',
  styles: []
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
        equNombre: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
        equDescripcion: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
      });
    }


    addequipo(equNombre, equDescripcion ) {
      this.bs.addequipo(equNombre, equDescripcion );
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
