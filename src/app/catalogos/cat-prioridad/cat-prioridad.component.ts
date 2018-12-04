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
  arrayPrioridad: Catprioridad[];

  constructor( private prioridadService: PrioridadService,
    private fb: FormBuilder, private bs: PrioridadService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
<<<<<<< HEAD
    this.prioridadService.getPrioridads().subscribe(
      (data: Catprioridad[]) => this.arrayPrioridad = data
=======
    this.prioridadService.getPrioridades().subscribe(
      (data: Catprioridad[]) => this.arrayAreas = data
>>>>>>> 96d018f0c64598b4b3d215128786226778be4d49
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


