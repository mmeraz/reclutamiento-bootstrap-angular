import { Component, OnInit, Input } from '@angular/core';
import { Catequipo } from 'src/app/model/catequipo.model';
import { EquipoService } from 'src/app/service/cat.equipo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-equipo',
  templateUrl: './cat-equipo.component.html',
  providers: [EquipoService]
})
export class CatEquipoComponent implements OnInit {

  angForm: FormGroup;
  arrayAreas: Catequipo[];

  constructor( private equipoService: EquipoService,
    private fb: FormBuilder, private bs: EquipoService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.equipoService.getEquipos().subscribe(
      (data: Catequipo[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      equNombre: ['', Validators.required ],
      equDescripcion: ['', Validators.required ],
    });
  }

  addequipo(equNombre, equDescripcion) {
    this.bs.addequipo(equNombre, equDescripcion);
  }

}
