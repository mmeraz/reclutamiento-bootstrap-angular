import { Component, OnInit, Input } from '@angular/core';
import { Catprioridad } from 'src/app/model/catprioridad.model';
import { PrioridadService } from 'src/app/service/cat.prioridad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-prioridad',
  templateUrl: './cat-prioridad.component.html',
  providers: [PrioridadService]
})
export class CatPrioridadComponent implements OnInit {

  angForm: FormGroup;
  arrayAreas: Catprioridad[];

  constructor( private prioridadService: PrioridadService,
    private fb: FormBuilder, private bs: PrioridadService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.prioridadService.getPrioridades().subscribe(
      (data: Catprioridad[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      priNombre: ['', Validators.required ]
    });
  }

  addprioridad(priNombre) {
    this.bs.addprioridad(priNombre);
  }

}


