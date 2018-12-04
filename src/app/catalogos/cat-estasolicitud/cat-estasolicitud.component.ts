import { Component, OnInit, Input } from '@angular/core';
import { Catarea } from 'src/app/model/catarea.model';
import { EstasolicitudService } from 'src/app/service/cat.estasolicitud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Catestasolicitud } from 'src/app/model/catestasolicitud.model';

@Component({
  selector: 'app-cat-estasolicitud',
  templateUrl: './cat-estasolicitud.component.html',
  providers: [EstasolicitudService]
})
export class CatEstasolicitudComponent implements OnInit {
  angForm: FormGroup;
  arrayEstasolicitud: Catestasolicitud[];

  constructor( private estatussolicitudService: EstasolicitudService,
    private fb: FormBuilder, private bs: EstasolicitudService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.estatussolicitudService.getestasolicituds().subscribe(
      (data: Catestasolicitud[]) => this.arrayEstasolicitud = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      estDescripcion: ['', Validators.required ]
    });
  }

  addestasolicitud(estDescripcion) {
    this.bs.addestasolicitud(estDescripcion);
  }
}


