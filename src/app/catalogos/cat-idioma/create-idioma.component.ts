import { Component, OnInit } from '@angular/core';
import { Catidioma } from '../../model/catidioma.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { IdiomaService } from '../../service/cat.idioma.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-idioma',
  templateUrl: './create-idioma.component.html',
  styles: [],
  providers: [IdiomaService]
})
export class CreateIdiomaComponent implements OnInit {

  addForm: FormGroup;
  arrayIdioma: Catidioma[];
  selectIdioma: Catidioma;

  constructor(private idiomaService: IdiomaService,
    private fb: FormBuilder, private bs: IdiomaService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.idiomaService.getIdiomass().subscribe(
        (data: Catidioma[]) => this.arrayIdioma = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        idiNombre: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addidioma(cohDescripcion) {
      this.bs.addidioma(cohDescripcion);
      swal({
        position: 'top',
        type: 'success',
        title: `Idioma creada con éxito`,
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
