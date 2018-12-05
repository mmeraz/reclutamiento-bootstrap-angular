import { Component, OnInit } from '@angular/core';
import { Catjornadalab } from '../../model/catjornadalab.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { JornadaLAbService } from '../../service/cat.jornadalab.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-jornadalab',
  templateUrl: './create-jornadalab.component.html',
  styles: [],
  providers: [JornadaLAbService]
})
export class CreateJornadalabComponent implements OnInit {
  addForm: FormGroup;
  arrayJornadalab: Catjornadalab[];
  selectJornadalab: Catjornadalab;

  constructor(private jornadalabService: JornadaLAbService,
    private fb: FormBuilder, private bs: JornadaLAbService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.jornadalabService.getJornadas().subscribe(
        (data: Catjornadalab[]) => this.arrayJornadalab = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        jolTipo: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addjornada(jolTipo) {
      this.bs.addjornada(jolTipo);
      swal({
        position: 'top',
        type: 'success',
        title: `Jornada laboral creada con éxito`,
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
