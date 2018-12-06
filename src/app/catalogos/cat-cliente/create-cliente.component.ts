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

  constructor() {
      
     }

     ngOnInit() {
    
    }
  


}
