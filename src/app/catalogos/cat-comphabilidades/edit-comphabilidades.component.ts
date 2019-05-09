import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompHabilidadesService } from '../../service/cat.comphabilidades.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-comphabilidades',
  templateUrl: './edit-comphabilidades.component.html',
  styles: []
})
export class EditComphabilidadesComponent implements OnInit {

  editForm: FormGroup;
  competencia: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: CompHabilidadesService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        cohDescripcion: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.competencia = res;
      });
    });
  }
   updateBusiness(cohDescripcion) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(cohDescripcion, params['id']);
       swal({
        position: 'top',
        type: 'success',
        title: `Habilidad modificada con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    });
     this.update();
 }

 update(): void {
  setTimeout(() => {
    this.router.navigate(['Habilidades']);
  }, 500);
 }

 saveData() {
  alert(JSON.stringify(this.editForm.value));
}


}
