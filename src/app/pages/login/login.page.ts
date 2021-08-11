import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/domain/administrador';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdministradorService } from 'src/app/services/administrador/administrador.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  adminLog:any;

  admin:Administrador= new Administrador();

  verifyPassword:string;

  constructor(public auth: AngularFireAuth,
              public adminService: AdministradorService,
              public toastController: ToastController,
              public router: Router) { }

  

  ngOnInit() {
  }

  async presentToast(mensaje:any) {
    const toast = await this.toastController.create({
      message: ""+mensaje+"",
      duration: 2000
    });
    toast.present();
  }

  async login(){
     if(this.admin.password==this.verifyPassword){
		const { admin } = this
		try {
			const res = await this.auth.signInWithEmailAndPassword(admin.email , admin.password)
			if(res.user) {


				this.adminLog = this.adminService.getData(res.user.uid);
				
				

				this.adminLog.forEach((element) => {
					
					
					console.log(element[0]);

					if(element[0].activo == false){
						this.presentToast('Usuario eliminado')
					}
					else{
						this.adminService.setUser({

	            id: element[0].id,
							email: element[0].email,
							password: element[0].password,
							active:  element[0].active
						})
						this.router.navigate(['/registro'])
					}
				});
			}
		} catch(err) {
			console.dir(err)
			if(err.code === "auth/user-not-found") {
				this.presentToast('Usuario no encontrado')
			}
			if(err.code === "auth/wrong-password") {
				this.presentToast('Contraseña Incorrecta')
			}
			if(err.code == "auth/invalid-email"){
				this.presentToast('Email invalido')
			}
		}
	 }else{
		this.presentToast('Las contraseñas no coinsiden')
	 }
  }
}