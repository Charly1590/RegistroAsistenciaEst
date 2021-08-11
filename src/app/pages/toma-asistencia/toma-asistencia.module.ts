import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomaAsistenciaPageRoutingModule } from './toma-asistencia-routing.module';

import { TomaAsistenciaPage } from './toma-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomaAsistenciaPageRoutingModule
  ],
  declarations: [TomaAsistenciaPage]
})
export class TomaAsistenciaPageModule {}
