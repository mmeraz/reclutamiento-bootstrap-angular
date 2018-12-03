import { Component, OnInit, Input } from '@angular/core';
import { Catjornadalab } from 'src/app/model/catjornadalab.model';
import { JornadaLAbService } from 'src/app/service/cat.jornadalab.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-jornadalab',
  templateUrl: './cat-jornadalab.component.html',
  providers: [JornadaLAbService]
})
export class CatJornadalabComponent implements OnInit {
  angForm: FormGroup;
  arrayAreas: Catjornadalab[];

  constructor( private JornadaService: JornadaLAbService,
    private fb: FormBuilder, private bs: JornadaLAbService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.JornadaService.getJornadas().subscribe(
      (data: Catjornadalab[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      jolTipo: ['', Validators.required ]
    });
  }

  addjornadalab(jolTipo) {
    this.bs.addjornadalab(jolTipo);
  }

}


