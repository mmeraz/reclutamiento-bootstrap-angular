import { Component, OnInit, Input } from '@angular/core';
import { Catcontecnicos } from 'src/app/model/catcontecnicos.model';
import { ConTecnicosService } from 'src/app/service/cat.contecnicos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-contecnicos',
  templateUrl: './cat-contecnicos.component.html',
  providers: [ConTecnicosService]
})
export class CatContecnicosComponent implements OnInit {

  angForm: FormGroup;
  arrayAreas: Catcontecnicos[];

  constructor( private contecnicosService: ConTecnicosService,
    private fb: FormBuilder, private bs: ConTecnicosService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.contecnicosService.getAreas().subscribe(
      (data: Catcontecnicos[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      cotConocimientos: ['', Validators.required ],
      cotTipo: ['', Validators.required ]
    });
  }

  addconocimientostec(cotConocimientos, cotTipo ) {
    this.bs.addconocimientostec(cotConocimientos, cotTipo );
  }

}

