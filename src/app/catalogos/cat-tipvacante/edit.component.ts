import { Component, OnInit } from '@angular/core';
import { TipoVacanteService } from 'src/app/service/cat.tipvacante.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { CatTipvacanteComponent } from './cat-tipvacante.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
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
       this.router.navigate(['Tipo vacante']);
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
