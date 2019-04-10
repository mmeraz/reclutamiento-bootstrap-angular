import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Catestacandidato } from '../../model/catestacandidato.model';
import { EstaCandidatoService } from '../../service/cat.estacandidato.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-estatuscandidato',
  templateUrl: './create-estatuscandidato.component.html',
  styles: []
})
export class CreateEstatuscandidatoComponent implements OnInit {

  addForm: FormGroup;
  arrayEstatus: Catestacandidato[];
  selectEstatus: Catestacandidato;

  constructor(private estatusService: EstaCandidatoService,
    private fb: FormBuilder, private bs: EstaCandidatoService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.estatusService.getEstatusCandidatos().subscribe(
        (data: Catestacandidato[]) => this.arrayEstatus = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        escDescripcion: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ2\\s]*$')] ]
      });
    }


    addEstatus(escDescripcion) {
      this.bs.addEstatusCandidato(escDescripcion);
      swal({
        position: 'top',
        type: 'success',
        title: `Estatus creado con éxito`,
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
