import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AdministradorService } from 'src/app/services/administrador/administrador.service';
import { EstudianteService } from 'src/app/services/estudiante/estudiante.service';

@Component({
  selector: 'app-toma-asistencia',
  templateUrl: './toma-asistencia.page.html',
  styleUrls: ['./toma-asistencia.page.scss'],
})
export class TomaAsistenciaPage implements OnInit {

  estudiantes:any;
  cedulaBusqueda:string;

  constructor( public router: Router, 
      public adminService: AdministradorService,
      public estudiantesService: EstudianteService,
      public readonly auth: AngularFireAuth) { }
  
  ngOnInit() {
    this.estudiantes=this.estudiantesService.getEstudiantes();
  }
  
  ionViewWillEnter(){
    if(this.adminService.getUser()==undefined){
      console.log(this.adminService.getUser())
      this.router.navigate(['/login'])
    }
  }

  buscar(event){
    this.cedulaBusqueda=event.detail.value;
    console.log(this.cedulaBusqueda.length)
    if(this.cedulaBusqueda.length >= 5){
      this.estudiantes=this.estudiantesService.getEstudiantePorCedula(this.cedulaBusqueda)
    }else{
      this.estudiantes=this.estudiantesService.getEstudiantes();
    }
  }

  registro(estudiante:any){
    estudiante.asistencia=true;
    this.estudiantesService.save(estudiante);
  }

  logout(){
    console.log("OUT");
    this.adminService.setUser(null);
    this.auth.signOut;
    this.router.navigate(['']);
  }

}
