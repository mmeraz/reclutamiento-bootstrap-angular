import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from 'src/app/service/cat.equipo.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-equipo',
  templateUrl: './edit-equipo.component.html',
  styles: []
})
export class EditEquipoComponent implements OnInit {
  editForm: FormGroup;
  equipo: any = {};
  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: EquipoService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        equNombre: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ],
        equDescripcion: ['', [Validators.required, Validators.maxLength(120), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ\\s]*$')] ]
      });
      }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.equipo = res;
      });
    });
  }

  updateBusiness(equNombre, equDescripcion) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness( equNombre, equDescripcion, params['id']);
       this.router.navigate(['Equipo']);
       swal({
        position: 'top',
        type: 'success',
        title: `Equipo modificada con éxito`,
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
