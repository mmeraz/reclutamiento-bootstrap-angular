import { Component, OnInit } from '@angular/core';
import { Catestasolicitud } from '../../model/catestasolicitud.model';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { EstasolicitudService } from '../../service/cat.estasolicitud.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-create-estasolicitud',
  templateUrl: './create-estasolicitud.component.html',
  styles: [],
  providers: [EstasolicitudService]
})
export class CreateEstasolicitudComponent implements OnInit {
  addForm: FormGroup;
  arrayEstasolicitud: Catestasolicitud[];
  selectEstasolicitud: Catestasolicitud;

  constructor(private estasolicitudService: EstasolicitudService,
    private fb: FormBuilder, private bs: EstasolicitudService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }

     ngOnInit() {
      this.estasolicitudService.getestasolicitud().subscribe(
        (data: Catestasolicitud[]) => this.arrayEstasolicitud = data
      );
    }
    createForm() {
      this.addForm = this.fb.group({
        estDescripcion: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ]
      });
    }


    addestasolicitud(estDescripcion) {
      this.bs.addestasolicitud(estDescripcion);
      swal({
        position: 'top',
        type: 'success',
        title: `Estatus solicitud creada con éxito`,
        showConfirmButton: false,
        timer: 1500
      });
      this.update();
    }

    update(): void {
      window.location.reload();
    }
    saveData() {
      alert(JSON.stringify(this.addForm.value));
    }

}
