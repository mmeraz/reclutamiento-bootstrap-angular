import { Component, OnInit } from '@angular/core';
import { Catcliente } from '../../model/catcliente.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ClienteService } from '../../service/cat.cliente.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styles: [],
  providers: [ClienteService]
})
export class CreateClienteComponent implements OnInit {

  addForm: FormGroup;
  arrayCliente: Catcliente[];
  selectCliente: Catcliente;

  constructor(private clienteService: ClienteService,
    private fb: FormBuilder, private bs: ClienteService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.clienteService.getClientes().subscribe(
        (data: Catcliente[]) => this.arrayCliente = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        cliNombre: ['', [Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ],
        cliRazonsocial: ['', [Validators.required, Validators.maxLength(150), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addcliente(cliNombre, cliRazonsocial ) {
      this.bs.addcliente(cliNombre , cliRazonsocial);
      swal({
        position: 'top',
        type: 'success',
        title: `Cliente creado con éxito`,
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
