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
  arrayAreas: Catestasolicitud[];

  constructor( private estatussolicitudService: EstasolicitudService,
    private fb: FormBuilder, private bs: EstasolicitudService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.estatussolicitudService.getAreas().subscribe(
      (data: Catestasolicitud[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      estDescripcion: ['', Validators.required ]
    });
  }

  addestatussolicitud(estDescripcion) {
    this.bs.addestatussolicitud(estDescripcion);
  }
}


