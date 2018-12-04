import { Component, OnInit } from '@angular/core';
import { Catcandidato } from '../../model/catcandidato.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { CandidatoService } from '../../service/cat.candidato.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-candidato',
  templateUrl: './create-candidato.component.html',
  styles: [],
  providers: [CandidatoService]
})
export class CreateCandidatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
