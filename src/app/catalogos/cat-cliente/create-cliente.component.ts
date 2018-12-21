import { Component, OnInit } from '@angular/core';
import { Catarea } from '../../model/catarea.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

import { ClienteService } from 'src/app/service/cat.cliente.service';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styles: []
})
export class CreateClienteComponent implements OnInit {
  addForm: FormGroup;
  clienteAreas: Catarea[];
  selectArea: Catarea;

  constructor(private clienteService: ClienteService,
    private fb: FormBuilder, private bs: ClienteService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.clienteService.getClientes().subscribe(
        (data: Catarea[]) => this.clienteAreas = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        cliNombre: ['', [Validators.required, Validators.maxLength(150), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ.,&\\s]*$')] ],
      cliRazonsocial: ['', [Validators.required, Validators.maxLength(150), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ.,&\\s]*$')] ]
      });
    }


    addcliente(cliNombre, cliRazonsocial) {
      this.bs.addcliente(cliNombre, cliRazonsocial);
      swal({
        position: 'top',
        type: 'success',
        title: `Cliente creada con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
      this.update();
    }

    update(): void {
      window.location.reload();
    }
    saveData() {
      alert(JSON.stringify(this.addForm.value));
    }

}
