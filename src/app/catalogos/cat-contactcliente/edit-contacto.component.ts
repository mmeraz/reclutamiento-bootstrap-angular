import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Catcontactcliente} from 'src/app/model/catcontactcliente.model';
import { ContactClienteService} from 'src/app/service/cat.contactcliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-contacto',
  templateUrl: './edit-contacto.component.html',
  styles: []
})
export class EditContactoComponent implements OnInit {
  editForm: FormGroup;
  cliente: any = {};
  contacto: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: ContactClienteService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.editForm = this.fb.group({
      clcNombre: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ],
      clcTelefono: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[0-9]*$')] ],
      clcEmail: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('')] ],
      clcTipo: ['', [Validators.required, Validators.maxLength(1), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]')] ],
      clcExtension: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[0-9]*$')] ]
        });
      }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.bs.editBusinessc(params['id']).subscribe(res => {
        this.contacto = res;
      });
    });
  }
   updateBusiness( clcNombre, clcTelefono, clcEmail, clcTipo, clcExtension) {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(clcNombre, clcTelefono, clcEmail, clcTipo, clcExtension, params['id']);

       swal({
        position: 'top',
        type: 'success',
        title: `Área modificada con éxito`,
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
