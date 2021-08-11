import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificacionAsistenciaPageRoutingModule } from './verificacion-asistencia-routing.module';

import { VerificacionAsistenciaPage } from './verificacion-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificacionAsistenciaPageRoutingModule
  ],
  declarations: [VerificacionAsistenciaPage]
})
export class VerificacionAsistenciaPageModule {}
