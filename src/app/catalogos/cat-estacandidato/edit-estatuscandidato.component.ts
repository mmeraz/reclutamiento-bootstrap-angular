import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstaCandidatoService } from '../../service/cat.estacandidato.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-estatuscandidato',
  templateUrl: './edit-estatuscandidato.component.html',
  styles: []
})
export class EditEstatuscandidatoComponent implements OnInit {
  editForm: FormGroup;
  estatus: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: EstaCandidatoService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        escDescripcion: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.estatus = res;
      });
    });
  }
   updateBusiness(escDescripcion) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(escDescripcion, params['id']);
       this.router.navigate(['Estatus-candidato']);
       swal({
        position: 'top',
        type: 'success',
        title: `Estatus modificado con éxito`,
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
