import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoVacanteService } from 'src/app/service/cat.tipvacante.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-tipvacante',
  templateUrl: './edit-tipvacante.component.html',
  styles: []
})
export class EditTipvacanteComponent implements OnInit {

  editForm: FormGroup;
  tipvacante: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: TipoVacanteService,
    private fb: FormBuilder) {
      this.createForm();
     }

    createForm() {
      this.editForm = this.fb.group({
        tvaTipo: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.tipvacante = res;
      });
    });
  }
   updateBusiness(tvaTipo) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(tvaTipo, params['id']);
       this.router.navigate(['Tipo-vacante']);
       swal({
        position: 'top',
        type: 'success',
        title: `Tipo vacante modificada con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    });
     this.update();
 }

 update(): void {
  window.location.reload();
}

 saveData() {
  alert(JSON.stringify(this.editForm.value));
}


}
