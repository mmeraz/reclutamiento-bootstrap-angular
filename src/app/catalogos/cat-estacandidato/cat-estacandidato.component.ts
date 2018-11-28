import { Component, OnInit, Input } from '@angular/core';
import { Catestacandidato } from 'src/app/model/catestacandidato.model';
import { EstaCandidatoService  } from 'src/app/service/cat.estacandidato.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-estacandidato',
  templateUrl: './cat-estacandidato.component.html',
  providers: [EstaCandidatoService]
})
export class CatEstacandidatoComponent implements OnInit {
  angForm: FormGroup;
  arrayAreas: Catestacandidato[];

  constructor( private estatuscandidatoService: EstaCandidatoService,
    private fb: FormBuilder, private bs: EstaCandidatoService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.estatuscandidatoService.getAreas().subscribe(
      (data: Catestacandidato[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      escDescripcion: ['', Validators.required ]
    });
  }

  addestatuscandidato(escDescripcion) {
    this.bs.addestatuscandidato(escDescripcion);
  }

}
