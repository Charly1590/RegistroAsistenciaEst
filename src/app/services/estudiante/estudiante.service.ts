import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/domain/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(public afs: AngularFirestore) { }
  
  save(estudiante:Estudiante){
      const refEstudiantes = this.afs.collection("estudiantes");
      
      if (estudiante.id == null){
        estudiante.id = this.afs.createId();
        estudiante.active = true;
      }
  
      refEstudiantes.doc(estudiante.id).set(Object.assign({}, estudiante));
  }
  
  getEstudiantes():Observable<any[]>{
    return this.afs.collection("estudiantes",
            ref=> ref.where("active","==",true)).valueChanges();
  }

  getEstudiantePorCedula(cedula:any):Observable<any[]>{
    return this.afs.collection("estudiantes",
            ref=> ref.where("cedula","==",cedula)).valueChanges();
  }
  
  getEstudiantesAsistidos():Observable<any[]>{
    return this.afs.collection("estudiantes",
            ref=> ref.where("active","==",true).where("asistencia","==",true)).valueChanges();
  }

}
