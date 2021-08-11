import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login del administrador', url: '/login', icon: 'mail' },
    { title: 'Registro de estudiantes', url: '/registro', icon: 'paper-plane' },
    { title: 'Tomar asistencia', url: '/toma-asistencia', icon: 'heart' },
    { title: 'Verificar asistencia', url: '/verificacion-asistencia', icon: 'archive' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
