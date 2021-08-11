import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AdministradorService } from 'src/app/services/administrador/administrador.service';
import { EstudianteService } from 'src/app/services/estudiante/estudiante.service';

@Component({
  selector: 'app-verificacion-asistencia',
  templateUrl: './verificacion-asistencia.page.html',
  styleUrls: ['./verificacion-asistencia.page.scss'],
})
export class VerificacionAsistenciaPage implements OnInit {
  
  estudiantes:any;

  constructor( public router: Router, 
              public adminService: AdministradorService,
              public estudiantesService: EstudianteService,
              public readonly auth: AngularFireAuth,) { }

  ngOnInit() {
    this.estudiantes=this.estudiantesService.getEstudiantesAsistidos();
  }
  
  ionViewWillEnter(){
    if(this.adminService.getUser()==undefined){
      console.log(this.adminService.getUser())
      this.router.navigate(['/login'])
    }
  }

  logout(){
    console.log("OUT");
    this.adminService.setUser(null);
    this.auth.signOut;
    this.router.navigate(['']);
  }

}
