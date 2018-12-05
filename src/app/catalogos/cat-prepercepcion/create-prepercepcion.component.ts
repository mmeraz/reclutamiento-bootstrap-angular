import { Component, OnInit } from '@angular/core';
import { Catprepercepcion } from '../../model/catprepercepcion.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { PrePercepcionService } from '../../service/cat.prepercepcion.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-prepercepcion',
  templateUrl: './create-prepercepcion.component.html',
  styles: [],
  providers: [PrePercepcionService]
})
export class CreatePrepercepcionComponent implements OnInit {

  addForm: FormGroup;
  arrayPrecepcion: Catprepercepcion[];
  selectPrecepcion: Catprepercepcion;

  constructor(private precepcionService: PrePercepcionService,
    private fb: FormBuilder, private bs: PrePercepcionService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.precepcionService.getPercepciones().subscribe(
        (data: Catprepercepcion[]) => this.arrayPrecepcion = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        preTipo: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addprecepcion(preTipo) {
      this.bs.addprecepcion(preTipo);
      swal({
        position: 'top',
        type: 'success',
        title: `Precepcion creada con éxito`,
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
