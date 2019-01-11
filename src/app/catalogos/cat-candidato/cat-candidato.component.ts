import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidatoService } from '../../service/cat.candidato.service';
import { DataTableDirective } from 'angular-datatables';
import { Candidato } from '../../model/candidato.model';
import { Subject, throwError } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { AuthService} from '../../service/auth.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cat-candidato',
  templateUrl: './cat-candidato.component.html',
  styles: [],
  providers: [CandidatoService]
})
export class CatCandidatoComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  arrayCandidatos: Candidato[];
  allCandidatos: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private candidatoService: CandidatoService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              protected authservice: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.candidatoService.getCandidatos().pipe(catchError( err => {
      if (err.status === 401) {
        this.update();
        this.authservice.loguot();
        this.router.navigateByUrl('/login');
      } else {
          return throwError(err);
      }
 })).subscribe(result => {
      this.allCandidatos = result;
      this.dtTrigger.next();
    });
    console.log(this.allCandidatos);
  }

  OnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    setTimeout(() => {
      this.candidatoService.getCandidatos().subscribe(result => {
        this.allCandidatos = result;
      });
    }, 30);
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
    });
    this.ngOnInit();
  }

  update(): void {
    window.location.reload();
  }


  deleteBusiness(id, cndNombre) {
    swal({
      title: 'Está seguro?',
    text: `¿Seguro desea eliminar el candidato ${cndNombre}?`,
      type: 'warning',
      showCancelButton: true,
    confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
      this.candidatoService.deleteBusiness(id).subscribe(data => {
          this.allCandidatos = this.allCandidatos.filter(c => c.id !== id);
        });
        swal('Eliminado!', 'Se ha eliminado el candidato.', 'success');
        this.rerender();
      }
    });
}

}
