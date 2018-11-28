import { Component, OnInit, Input } from '@angular/core';
import { Catcliente } from 'src/app/model/catcliente.model';
import { ClienteService } from 'src/app/service/cat.cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-cliente',
  templateUrl: './cat-cliente.component.html',
  providers: [ClienteService]
})
export class CatClienteComponent implements OnInit {
  angForm: FormGroup;
  arrayAreas: Catcliente[];

  constructor( private clienteService: ClienteService,
    private fb: FormBuilder, private bs: ClienteService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.clienteService.getAreas().subscribe(
      (data: Catcliente[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      cliNombre: ['', Validators.required ],
      cliRazonsocial: ['', Validators.required ]
    });
  }

  addcliente(cliNombre, cliRazonsocial) {
    this.bs.addcliente(cliNombre, cliRazonsocial);
  }

}

