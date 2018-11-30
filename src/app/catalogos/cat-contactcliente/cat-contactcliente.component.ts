import { Component, OnInit } from '@angular/core';
import { Catcontactcliente} from 'src/app/model/catcontactcliente.model';
import { ContactClienteService} from 'src/app/service/cat.contactcliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Catcliente } from 'src/app/model/catcliente.model';


@Component({
  selector: 'app-cat-contactcliente',
  templateUrl: './cat-contactcliente.component.html',
  providers: [ContactClienteService]
})
export class CatContactclienteComponent implements OnInit {
  contacto: Catcliente[];
  cliente: Catcliente = null;
  arrayContactCliente: Catcontactcliente[] = [];

  constructor(private contaclienteService: ContactClienteService,
    private fb: FormBuilder, private bs: ContactClienteService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contaclienteService.getContactcliente().subscribe
      (contacto => this.contacto = contacto
    );
  }

}

