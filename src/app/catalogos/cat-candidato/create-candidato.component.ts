import { Component, OnInit } from '@angular/core';
import { Catcandidato } from '../../model/catcandidato.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CandidatoService } from '../../service/cat.candidato.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-candidato',
  templateUrl: './create-candidato.component.html',
  styles: [],
  providers: [CandidatoService]
})
export class CreateCandidatoComponent implements OnInit {

  aaddForm: FormGroup;
  arrayCandidato: Catcandidato[];
  selectCandidato: Catcandidato;

  constructor(private candidatoService: CandidatoService,
    private fb: FormBuilder, private bs: CandidatoService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.candidatoService.getCandidatoss().subscribe(
        (data: Catcandidato[]) => this.arrayCandidato = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        arnTipo: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addcandidato(cndNombre,
      cndApellidopat,
      cndApellidomat,
      cndcalle,
      cndNumext) {
      this.bs.addarea(arnTipo);
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
