import { Component, OnInit, Input } from '@angular/core';
import { Catarea } from 'src/app/model/catarea.model';
import { PrePercepcionService } from 'src/app/service/cat.prepercepcion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Catprepercepcion } from 'src/app/model/catprepercepcion.model';

@Component({
  selector: 'app-cat-prepercepcion',
  templateUrl: './cat-prepercepcion.component.html',
  providers: [PrePercepcionService]
})
export class CatPrepercepcionComponent implements OnInit {

  angForm: FormGroup;
  arrayAreas: Catprepercepcion[];

  constructor( private prepercepcionService: PrePercepcionService,
    private fb: FormBuilder, private bs: PrePercepcionService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.prepercepcionService.getAreas().subscribe(
      (data: Catprepercepcion[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      preTipo: ['', Validators.required ]
    });
  }

  addprecepcion(preTipo) {
    this.bs.addprecepcion(preTipo);
  }

}

