import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/service/cat.area.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { CatComphabilidadesComponent } from './cat-comphabilidades.component';
import { CompHabilidadesService } from 'src/app/service/cat.comphabilidades.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  competencias: any = {};

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
        this.competencias = res;
      });
    });
  }
   updateBusiness(cohDescripcion) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(cohDescripcion, params['id']);
       this.router.navigate(['comphabilidades']);
       swal({
        position: 'top',
        type: 'success',
        title: `Competencias modificada con éxito`,
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
