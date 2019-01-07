import { Component, OnInit } from '@angular/core';
import { Catcomphabilidades } from '../../model/catcomphabilidades.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CompHabilidadesService } from '../../service/cat.comphabilidades.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-comphabilidades',
  templateUrl: './create-comphabilidades.component.html',
  styles: [],
  providers: [CompHabilidadesService]
})
export class CreateComphabilidadesComponent implements OnInit {

  addForm: FormGroup;
  arrayComphabilidades: Catcomphabilidades[];
  selectComphabilidades: Catcomphabilidades;

  constructor(private comphabilidadesService: CompHabilidadesService,
    private fb: FormBuilder, private bs: CompHabilidadesService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.comphabilidadesService.getCompHabilidades().subscribe(
        (data: Catcomphabilidades[]) => this.arrayComphabilidades = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        cohDescripcion: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
      });
    }


    addCompHabilidades(cohDescripcion) {
      this.bs.addCompHabilidades(cohDescripcion);
      swal({
        position: 'top',
        type: 'success',
        title: `Competencias y  Habilidades creada con éxito`,
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
