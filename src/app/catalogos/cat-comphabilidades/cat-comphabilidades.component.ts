import { Component, OnInit, Input } from '@angular/core';
import { Catcomphabilidades } from 'src/app/model/catcomphabilidades.model';
import { CompHabilidadesService } from 'src/app/service/cat.comphabilidades.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-comphabilidades',
  templateUrl: './cat-comphabilidades.component.html',
  providers: [CompHabilidadesService]
})
export class CatComphabilidadesComponent implements OnInit {

  angForm: FormGroup;
  arrayAreas: Catcomphabilidades[];

  constructor( private comphabilidadesService: CompHabilidadesService,
    private fb: FormBuilder, private bs: CompHabilidadesService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.comphabilidadesService.getAreas().subscribe(
      (data: Catcomphabilidades[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      cohDescripcion: ['', Validators.required ]
    });
  }

  addcomphabilidades(cohDescripcion) {
    this.bs.addcomphabilidades(cohDescripcion);
  }

}
