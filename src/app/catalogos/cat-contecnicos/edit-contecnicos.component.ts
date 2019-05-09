import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConTecnicosService } from 'src/app/service/cat.contecnicos.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-contecnicos',
  templateUrl: './edit-contecnicos.component.html',
  styles: []
})
export class EditContecnicosComponent implements OnInit {


  editForm: FormGroup;
  contecnicos: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: ConTecnicosService,
    private fb: FormBuilder) {
      this.createForm();
     }

    createForm() {
      this.editForm = this.fb.group({
        cotConocimiento: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
        cotTipo: ['', [Validators.required, Validators.maxLength(1), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
      });
      }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.contecnicos = res;
      });
    });
  }
   updateBusiness( cotConocimiento, cotTipo ) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(cotConocimiento, cotTipo, params['id']);
       swal({
        position: 'top',
        type: 'success',
        title: `Conocimientos Tecnicos modificada con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.update();
 }

 update(): void {
  setTimeout(() => {
    this.router.navigate(['Conocimientos-tecnicos']);
  }, 500);
}

 saveData() {
  alert(JSON.stringify(this.editForm.value));
}


}
