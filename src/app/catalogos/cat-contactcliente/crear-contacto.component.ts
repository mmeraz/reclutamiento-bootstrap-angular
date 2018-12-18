import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Catcontactcliente} from 'src/app/model/catcontactcliente.model';
import { ContactClienteService} from 'src/app/service/cat.contactcliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Catcliente} from 'src/app/model/catcliente.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styles: []
})
export class CrearContactoComponent implements OnInit {
  addForm: FormGroup;
  arraycontacto: Catcontactcliente[];
  selectArea: Catcontactcliente;
  cliente: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private areaService: ContactClienteService,
    private fb: FormBuilder, private bs: ContactClienteService,
    private activatedRoute: ActivatedRoute) {
      this.createForm();
     }
  ngOnInit() {
    this.areaService.getContactcliente().subscribe(
      (data: Catcontactcliente[]) => this.arraycontacto = data
    );
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.cliente = res;
      });
    });
  }
  createForm() {
    this.addForm = this.fb.group({
      cliIdcliente: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[0-9]*$')] ],
      clcNombre: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]*$')] ],
      clcTelefono: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[0-9]*$')] ],
      clcEmail: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('')] ],
      clcTipo: ['', [Validators.required, Validators.maxLength(1), Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ/s]')] ],
      clcExtension: ['', [Validators.required, Validators.maxLength(40), Validators.pattern('^[0-9]*$')] ]
    });
  }


  addcontacto(cliIdcliente, clcNombre, clcTelefono, clcEmail, clcTipo, clcExtension) {
    this.bs.addcontacto(cliIdcliente, clcNombre, clcTelefono, clcEmail, clcTipo, clcExtension);
    this.router.navigate(['Contacto-cliente']);
    swal({
      position: 'top',
      type: 'success',
      title: `Contacto Cliente creada con éxito`,
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
