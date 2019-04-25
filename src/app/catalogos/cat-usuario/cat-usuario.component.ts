import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catusuario } from 'src/app/model/catusuario.model';
import { UsuarioService } from 'src/app/service/cat.usuario.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-cat-usuario',
  templateUrl: './cat-usuario.component.html',
  providers: [UsuarioService]
})
export class CatUsuarioComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayUsuario: Catusuario[];
  allUsuario: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private usuarioService: UsuarioService,
    private fb: FormBuilder, private bs: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    protected authservice: AuthService) {
    }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
      };
      this.usuarioService.getUsuarios().subscribe(result => {
        this.allUsuario = result;
        this.dtTrigger.next();
      });
      console.log(this.allUsuario);
    }

    OnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }

    rerender(): void {
      setTimeout(() => {
        this.usuarioService.getUsuarios().subscribe(result => {
          this.allUsuario = result;
        });
      }, 30);
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
      });
      this.ngOnInit();
    }

    deleteBusiness(id, usrUsername) {
        swal({
          title: '¿Está seguro?',
        text: `¿Seguro desea eliminar al usuario ${usrUsername}?` ,
        type: 'warning',
          showCancelButton: true,
        confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, ¡eliminar!',
          cancelButtonText: 'Cancelar'
        }).then(result => {
          if (result.value) {
          this.usuarioService.deleteBusiness(id).subscribe(data => {
              this.allUsuario = this.allUsuario.filter(c => c.usrUsuario !== id);
            });
            swal('¡Eliminado!', 'Se ha eliminado el usuario.', 'success');
            this.rerender();
          }
        });
    }

  }



