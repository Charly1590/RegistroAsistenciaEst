import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Estudiante } from 'src/app/domain/estudiante';
import { AdministradorService } from 'src/app/services/administrador/administrador.service';
import { EstudianteService } from 'src/app/services/estudiante/estudiante.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor( public router: Router, 
               public adminService: AdministradorService,
               public estudianteService:EstudianteService,
               public readonly auth: AngularFireAuth,
               public toastController: ToastController) { }

  ngOnInit() {
  }

  estudiante:Estudiante=new Estudiante();
  
  ionViewWillEnter(){
    if(this.adminService.getUser()==undefined){
      console.log(this.adminService.getUser())
      this.router.navigate(['/login'])
    }
  }

  async presentToast(mensaje:any) {
    const toast = await this.toastController.create({
      message: ""+mensaje+"",
      duration: 2000
    });
    toast.present();
  }

  guardar(){
    try{
      this.estudiante.asistencia=false;
      this.estudianteService.save(this.estudiante);
      this.estudiante.nombre=null;
      this.estudiante.cedula=null;
      this.estudiante.carrera=null;
      this.presentToast('Se guardo de manera exitosa')
    }catch(error){
      this.presentToast('No se pudo guardar en la base de datos')
    }
  }

  logout(){
    console.log("OUT");
    this.adminService.setUser(null);
    this.auth.signOut;
    this.router.navigate(['']);
  }

}
