import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstasolicitudService } from 'src/app/service/cat.estasolicitud.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-estasolicitud',
  templateUrl: './edit-estasolicitud.component.html',
  styles: []
})
export class EditEstasolicitudComponent implements OnInit {

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
       swal({
        position: 'top',
        type: 'success',
        title: `Estatus solicitud vacante modificada con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.update();
 }

 update(): void {
  setTimeout(() => {
    this.router.navigate(['Estatus-solicitud']);
  }, 500);
}

 saveData() {
  alert(JSON.stringify(this.editForm.value));
}


}
