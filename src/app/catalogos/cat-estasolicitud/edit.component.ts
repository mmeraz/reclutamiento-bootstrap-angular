import { Component, OnInit } from '@angular/core';
import { EstasolicitudService } from 'src/app/service/cat.estasolicitud.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { CatEstasolicitudComponent } from './cat-estasolicitud.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  estasolicitud: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: EstasolicitudService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        estDescripcion: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.estasolicitud = res;
      });
    });
  }
   updateBusiness(estDescripcion) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(estDescripcion, params['id']);
       this.router.navigate(['Estasolicitud']);
       swal({
        position: 'top',
        type: 'success',
        title: `Estatus solicitud modificada con éxito`,
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
