import { Component, OnInit } from '@angular/core';
import { Catarea } from '../../model/catarea.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AreaService } from '../../service/cat.area.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styles: [],
  providers: [AreaService]
})
export class CreateAreaComponent implements OnInit {
  addForm: FormGroup;
  arrayAreas: Catarea[];
  selectArea: Catarea;

  constructor(private areaService: AreaService,
    private fb: FormBuilder, private bs: AreaService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.areaService.getAreas().subscribe(
        (data: Catarea[]) => this.arrayAreas = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        arnTipo: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
      });
    }


    addarea(arnTipo) {
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
