import { Component, OnInit, Input } from '@angular/core';
import { Catidioma } from 'src/app/model/catidioma.model';
import { IdiomaService } from 'src/app/service/cat.idioma.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-idioma',
  templateUrl: './cat-idioma.component.html',
  providers: [IdiomaService]
})
export class CatIdiomaComponent implements OnInit {

  angForm: FormGroup;
  arrayAreas: Catidioma[];

  constructor( private idiomaService: IdiomaService,
    private fb: FormBuilder, private bs: IdiomaService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.idiomaService.getAreas().subscribe(
      (data: Catidioma[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      idiNombre: ['', Validators.required ]
    });
  }

  addidioma(idiNombre) {
    this.bs.addidioma(idiNombre);
  }

}

