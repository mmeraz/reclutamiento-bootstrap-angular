import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrePercepcionService } from 'src/app/service/cat.prepercepcion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-prepercepcion',
  templateUrl: './edit-prepercepcion.component.html',
  styles: []
})
export class EditPrepercepcionComponent implements OnInit {

  editForm: FormGroup;
  precepcion: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: PrePercepcionService,
    private fb: FormBuilder) {
      this.createForm();
     }

    createForm() {
      this.editForm = this.fb.group({
        preTipo: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.precepcion = res;
      });
    });
  }
   updateBusiness(preTipo) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(preTipo, params['id']);
      this.router.navigate(['Pre-percepcion']);
       swal({
        position: 'top',
        type: 'success',
        title: `Precepcion vacante modificada con éxito`,
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
