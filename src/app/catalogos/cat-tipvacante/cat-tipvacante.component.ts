import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatTipoVacante } from 'src/app/model/cattipovacante.model';
import { TipoVacanteService } from 'src/app/service/cat.tipvacante.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-cat-tipvacante',
  templateUrl: './cat-tipvacante.component.html',
  providers: [TipoVacanteService]
})
export class CatTipvacanteComponent implements OnInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayTipvacante: CatTipoVacante[];
  allTipvacante: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private tipvacanteService: TipoVacanteService,
    private fb: FormBuilder, private bs: TipoVacanteService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    protected authservice: AuthService) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.tipvacanteService.getTipoVacantes().subscribe(result => {
      this.allTipvacante = result;
      this.dtTrigger.next();
    });
    console.log(this.allTipvacante);
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.tipvacanteService.getTipoVacantes().subscribe(result => {
        this.allTipvacante = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, tvaTipo) {
      swal({
        title: 'Está seguro?',
      text: `¿Seguro desea eliminar al tipo de vacante ${tvaTipo}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.tipvacanteService.deleteBusiness(id).subscribe(data => {
            this.allTipvacante = this.allTipvacante.filter(c => c.tvaIdtipovacante !== id);
          });
          swal('Eliminado!', 'Se ha eliminado el tipo vacante.', 'success');
          this.rerender();
        }
      });
  }

}
