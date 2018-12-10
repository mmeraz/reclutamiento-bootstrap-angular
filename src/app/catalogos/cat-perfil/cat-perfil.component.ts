import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catperfil } from 'src/app/model/catperfil.model';
import { PerfilService } from 'src/app/service/cat.perfil.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-cat-perfil',
  templateUrl: './cat-perfil.component.html',
  providers: [PerfilService]
})
export class CatPerfilComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayPerfil: Catperfil[];
  allPerfil: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private perfilService: PerfilService,
    private fb: FormBuilder, private bs: PerfilService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.perfilService.getPerfiles().subscribe(result => {
      this.allPerfil = result;
      this.dtTrigger.next();
    });
    console.log(this.allPerfil);
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.perfilService.getPerfiles().subscribe(result => {
        this.allPerfil = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, perPerfil) {
      swal({
        title: 'Está seguro?',
      text: `¿Seguro desea eliminar el perfil ${perPerfil}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.perfilService.deleteBusiness(id).subscribe(data => {
            this.allPerfil = this.allPerfil.filter(c => c.perIdperfil !== id);
          });
          swal('Eliminado!', 'Se ha eliminado el perfil.', 'success');
          this.rerender();
        }
      });
  }

}
