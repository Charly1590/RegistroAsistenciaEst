import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificacionAsistenciaPage } from './verificacion-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: VerificacionAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificacionAsistenciaPageRoutingModule {}
