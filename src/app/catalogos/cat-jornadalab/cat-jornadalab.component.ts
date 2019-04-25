import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catjornadalab } from 'src/app/model/catjornadalab.model';
import { JornadaLAbService } from 'src/app/service/cat.jornadalab.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-cat-jornadalab',
  templateUrl: './cat-jornadalab.component.html',
  providers: [JornadaLAbService]
})
export class CatJornadalabComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayJornadalab: Catjornadalab[];
  allJornadalab: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor( private jornadalabService: JornadaLAbService,
    private fb: FormBuilder, private bs: JornadaLAbService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    protected authservice: AuthService) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.jornadalabService.getJornadas().subscribe(result => {
      this.allJornadalab = result;
      this.dtTrigger.next();
    });
    console.log(this.allJornadalab);
  }

  OnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.jornadalabService.getJornadas().subscribe(result => {
        this.allJornadalab = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  deleteBusiness(id, jolTipo) {
      swal({
        title: '¿Está seguro?',
      text: `¿Seguro desea eliminar la jornada ${jolTipo}?`,
        type: 'warning',
        showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, ¡eliminar!',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.value) {
        this.jornadalabService.deleteBusiness(id).subscribe(data => {
            this.allJornadalab = this.allJornadalab.filter(c => c.jolIdjornada !== id);
          });
          swal('¡Eliminado!', 'Se ha eliminado el jornada.', 'success');
          this.rerender();
        }
      });
  }

}
