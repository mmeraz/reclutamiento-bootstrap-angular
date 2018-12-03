import { Component, OnInit, Input } from '@angular/core';
import { Catusuario } from 'src/app/model/catusuario.model';
import { UsuarioService } from 'src/app/service/cat.usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cat-usuario',
  templateUrl: './cat-usuario.component.html',
  providers: [UsuarioService]
})
export class CatUsuarioComponent implements OnInit {
  angForm: FormGroup;
  arrayAreas: Catusuario[];

  constructor( private usuarioService: UsuarioService,
    private fb: FormBuilder, private bs: UsuarioService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
    }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      (data: Catusuario[]) => this.arrayAreas = data
    );
  }
  createForm() {
    this.angForm = this.fb.group({
      usrUsername: ['', Validators.required ],
      usrNombreUsuario: ['', Validators.required ],
      usrPassword: ['', Validators.required ],
      usrEmail: ['', Validators.required ],
      usrPerfil: ['', Validators.required ],
      usrTelefono: ['', Validators.required ]
    });
  }

  addusuario(usrUsername, usrNombreUsuario, usrPassword, usrEmail, usrPerfil , usrTelefono) {
    this.bs.addusuario(usrUsername, usrNombreUsuario, usrPassword, usrEmail, usrPerfil , usrTelefono);
  }

}


