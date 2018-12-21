import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catequipo } from 'src/app/model/catequipo.model';
import { EquipoService } from 'src/app/service/cat.equipo.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-cat-equipo',
  templateUrl: './cat-equipo.component.html',
  providers: [EquipoService]
})
export class CatEquipoComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayEquipo: Catequipo[];
  allEquipo: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private equipoService: EquipoService,
    private fb: FormBuilder, private bs: EquipoService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    protected authservice: AuthService) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.equipoService.getEquipos().subscribe(result => {
      this.allEquipo = result;
      this.dtTrigger.next();
    });
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.equipoService.getEquipos().subscribe(result => {
        this.allEquipo = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, equNombre, equDescripcion) {
      swal({
        title: 'Está seguro?',
      text: `¿Seguro desea eliminar al equipo ${equNombre}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.equipoService.deleteBusiness(id).subscribe(data => {
            this.allEquipo = this.allEquipo.filter(c => c.equIdequipo !== id);
          });
          swal('Eliminado!', 'Se ha eliminado el equipo.', 'success');
        }
        this.rerender();
      });
  }

}
