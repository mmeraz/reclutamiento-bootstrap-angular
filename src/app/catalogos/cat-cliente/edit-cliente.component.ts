import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { ClienteService } from 'src/app/service/cat.cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styles: []
})
export class EditClienteComponent implements OnInit {

  editForm: FormGroup;
  cliente: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: ClienteService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
        cliNombre: ['', [Validators.required, Validators.maxLength(150), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ.,&\\s]*$')] ],
      cliRazonsocial: ['', [Validators.required, Validators.maxLength(150), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ.,&\\s]*$')] ]
      });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.cliente = res;
      });
    });
  }
   updateBusiness(cliNombre, cliRazonsocial) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(cliNombre, cliRazonsocial, params['id']);
       this.router.navigate(['Cliente']);
       swal({
        position: 'top',
        type: 'success',
        title: `Cliente modificada con éxito`,
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
