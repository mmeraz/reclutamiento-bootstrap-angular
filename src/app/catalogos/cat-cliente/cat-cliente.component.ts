import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catcliente } from 'src/app/model/catcliente.model';
import { ClienteService } from 'src/app/service/cat.cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cat-cliente',
  templateUrl: './cat-cliente.component.html',
  providers: [ClienteService]
})
export class CatClienteComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayClientes: Catcliente[];
  allCliente: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private clienteService: ClienteService,
    private fb: FormBuilder, private bs: ClienteService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.clienteService.getClientes();
  }
  createForm() {

  }

  addcliente(cliNombre, cliRazonsocial) {
    this.bs.addcliente(cliNombre, cliRazonsocial);
  }

}

