import { Component, OnInit } from '@angular/core';
import { Catcontactcliente} from 'src/app/model/catcontactcliente.model';
import { ContactClienteService} from 'src/app/service/cat.contactcliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Catcliente } from 'src/app/model/catcliente.model';
import swal from 'sweetalert2';
import { AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-cat-contactcliente',
  templateUrl: './cat-contactcliente.component.html',
  providers: [ContactClienteService]
})
export class CatContactclienteComponent implements OnInit {
  contacto: Catcliente[];
  cliente: Catcliente = null;
  contactos: Catcontactcliente[] = [];

  constructor(private contaclienteService: ContactClienteService,
    private fb: FormBuilder, private bs: ContactClienteService,
    private activatedRoute: ActivatedRoute,
    protected authservice: AuthService) { }

  ngOnInit() {
    this.contaclienteService.getContactcliente().subscribe
      ((data: Catcliente[]) => this.contacto = data );
    console.log(this.contacto);
    console.log(this.contactos);
  }
  deleteBusiness(id, clcIdconcli) {
    swal({
      title: 'Está seguro?',
    text: `¿Seguro desea eliminar el contacto cliente ${clcIdconcli}?`,
      type: 'warning',
      showCancelButton: true,
    confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
      this.contaclienteService.deleteBusiness(id).subscribe(data => {
          this.contactos = this.contactos.filter(c => c.clcIdconcli !== id);
        });
        swal('Eliminado!', 'Se ha eliminado el contacto cliente.', 'success');
      }
    });
}

}

