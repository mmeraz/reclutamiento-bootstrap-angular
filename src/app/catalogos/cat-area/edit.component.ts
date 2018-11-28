import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/service/cat.area.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditAreaComponent implements OnInit {
  editForm: FormGroup;
  area: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: AreaService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        arnTipo: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.area = res;
      });
    });
  }
   updateBusiness(arnTipo) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(arnTipo, params['id']);
       this.router.navigate(['Area']);
       swal({
        position: 'top',
        type: 'success',
        title: `Área modificada con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
    });
 }

 saveData() {
  alert(JSON.stringify(this.editForm.value));
}


}
