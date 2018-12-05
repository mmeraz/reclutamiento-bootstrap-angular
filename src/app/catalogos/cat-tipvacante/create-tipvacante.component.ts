import { Component, OnInit } from '@angular/core';
import { Cattipovacante } from '../../model/cattipovacante.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TipoVacanteService } from '../../service/cat.tipvacante.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-tipvacante',
  templateUrl: './create-tipvacante.component.html',
  styles: [],
  providers: [TipoVacanteService]
})
export class CreateTipvacanteComponent implements OnInit {

  addForm: FormGroup;
  arrayTipovacante: Cattipovacante[];
  selectTipovacante: Cattipovacante;

  constructor(private tipovacanteService: TipoVacanteService,
    private fb: FormBuilder, private bs: TipoVacanteService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.tipovacanteService.getTipoVacantes().subscribe(
        (data: Cattipovacante[]) => this.arrayTipovacante = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        tvaTipo: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addtvatipo(tvaTipo)   {
      this.bs.addtvatipo(tvaTipo);
      swal({
        position: 'top',
        type: 'success',
        title: `Tipo de vacante creada con éxito`,
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
