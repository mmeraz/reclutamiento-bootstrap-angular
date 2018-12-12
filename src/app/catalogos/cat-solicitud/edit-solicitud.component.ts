import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from 'src/app/service/cat.area.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Catsolicitud } from 'src/app/model/catsolicitud.model';
import { SolicitudService } from 'src/app/service/cat.solicitud.service';
import swal from 'sweetalert2';
import { Catarea } from 'src/app/model/catarea.model';
import { Catprioridad } from 'src/app/model/catprioridad.model';
import { CatTipoVacante } from 'src/app/model/cattipovacante.model';
import { Catcontecnicos } from 'src/app/model/catcontecnicos.model';
import { Catidioma } from 'src/app/model/catidioma.model';
import { Catperfil } from 'src/app/model/catperfil.model';
import { Catequipo } from 'src/app/model/catequipo.model';
import { Catprepercepcion } from 'src/app/model/catprepercepcion.model';
import { Catcomphabilidades } from 'src/app/model/catcomphabilidades.model';
import { Catjornadalab } from 'src/app/model/catjornadalab.model';
import { Catcliente } from 'src/app/model/catcliente.model';
import { PrioridadService } from 'src/app/service/cat.prioridad.service';
import { TipoVacanteService } from 'src/app/service/cat.tipvacante.service';
import { IdiomaService } from 'src/app/service/cat.idioma.service';
import { ClienteService } from 'src/app/service/cat.cliente.service';
import { JornadaLAbService } from 'src/app/service/cat.jornadalab.service';
import { ConTecnicosService } from 'src/app/service/cat.contecnicos.service';
import { CompHabilidadesService } from 'src/app/service/cat.comphabilidades.service';
import { PrePercepcionService } from 'src/app/service/cat.prepercepcion.service';
import { EquipoService } from 'src/app/service/cat.equipo.service';
import { PerfilService } from 'src/app/service/cat.perfil.service';

@Component({
  selector: 'app-edit-solicitud',
  templateUrl: './edit-solicitud.component.html',
  styles: []
})
export class EditSolicitudComponent implements OnInit {
  editForm: FormGroup;
  solicitud: Catsolicitud;

    // info para los select :P
    allAreas: Catarea[];
    allPrioridad: Catprioridad[];
    allVacantes: CatTipoVacante[];
    allConocimiento: Catcontecnicos[];
    allIdiomas: Catidioma[];
    allClientes: Catcliente[];
    allJornada: Catjornadalab[];
    allHabilidades: Catcomphabilidades[];
    allPercepciones: Catprepercepcion[];
    allEquipo: Catequipo[];
    allPerfiles: Catperfil[];
    area: Catarea;

  constructor(private areaService: AreaService,
    private prioridadService: PrioridadService,
    private tipoVacanteService: TipoVacanteService,
    private idiomaService: IdiomaService,
    private clienteService: ClienteService,
    private jornadaService: JornadaLAbService,
    private conocimientoService: ConTecnicosService,
    private habilidadService: CompHabilidadesService,
    private percepcionService: PrePercepcionService,
    private equipoService: EquipoService,
    private perfilService: PerfilService,
    private route: ActivatedRoute,
    private router: Router,
    private bs: SolicitudService,
    private fb: FormBuilder) {

     }

  ngOnInit() {
    this.areaService.getAreas().subscribe((data: Catarea[]) => this.allAreas = data);
    this.prioridadService.getPrioridades().subscribe((data: Catprioridad[]) => this.allPrioridad = data);
    this.tipoVacanteService.getTipoVacantes().subscribe((data: CatTipoVacante[]) => this.allVacantes = data);
    this.idiomaService.getIdiomas().subscribe((data: Catidioma[]) => this.allIdiomas = data);
    this.clienteService.getClientes().subscribe((data: Catcliente[]) => this.allClientes = data);
    this.jornadaService.getJornadas().subscribe((data: Catjornadalab[]) => this.allJornada = data);
    this.conocimientoService.getContecnicos().subscribe((data: Catcontecnicos[]) => this.allConocimiento = data);
    this.habilidadService.getCompHabilidades().subscribe((data: Catcomphabilidades[]) => this.allHabilidades = data);
    this.percepcionService.getPercepciones().subscribe((data: Catprepercepcion[]) => this.allPercepciones = data);
    this.equipoService.getEquipos().subscribe((data: Catequipo[]) => this.allEquipo = data);
    this.perfilService.getPerfiles().subscribe((data: Catperfil[]) => this.allPerfiles = data);
    this.route.params.subscribe(params => {
      this.bs.editBusiness(params['id']).subscribe(res => {
        this.solicitud = res;
      });
    });
  }

  updateBusiness() {
    this.route.params.subscribe(params => {
       this.bs.updateBusiness(this.solicitud, params['id']);
       this.router.navigate(['']);
       swal({
        position: 'top',
        type: 'success',
        title: `Solicitud modificada con éxito!!`,
        showConfirmButton: false,
        timer: 1500
      });
    });
    this.update();
 }

 update(): void {
  window.location.reload();
}

}
