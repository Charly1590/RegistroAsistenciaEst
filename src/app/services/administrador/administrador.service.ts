import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/domain/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(public afs: AngularFirestore) { }

  private admin:Administrador

  setUser(admin:Administrador){
    this.admin = admin
  }
  
  save(admin:Administrador){
      const refAdministrador = this.afs.collection("administradores");
      
      if (admin.id == null){
        admin.id = this.afs.createId();
        admin.active = true;
      }
  
      refAdministrador.doc(admin.id).set(Object.assign({}, admin));
  }

  getUser(){
    return this.admin
  }

  getData(id:string):Observable<any[]>{
    console.log(id);
    
    return this.afs.collection("administradores",
            ref=> ref.where("id","==",id)).valueChanges();
  }
  
}
