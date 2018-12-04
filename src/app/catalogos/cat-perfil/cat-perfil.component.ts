import { Component, OnInit, Input } from '@angular/core';
import { Catperfil } from 'src/app/model/catperfil.model';
import { PerfilService } from 'src/app/service/cat.perfil.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-perfil',
  templateUrl: './cat-perfil.component.html',
  providers: [PerfilService]
})
export class CatPerfilComponent implements OnInit {

  angForm: FormGroup;
  arrayAreas: Catperfil[];

  constructor( private perfilService: PerfilService,
    private fb: FormBuilder, private bs: PerfilService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.perfilService.getPerfiles().subscribe(
      (data: Catperfil[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      perPerfil: ['', Validators.required ]
    });
  }

  addperfil(perPerfil) {
    this.bs.addperfil(perPerfil);
  }

}
