import { Component } from '@angular/core';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicios';

  constructor(public notificacionesService: NotificacionesService) {}

  agregarNotificacionInformacion() {
    this.notificacionesService.agregar("Información", "Todo va bien", "Informacion")
  }
  agregarNotificacionError() {
    this.notificacionesService.agregar("Error", "Algo salio mal", "Error")
  }

  limpiarNotificaciones(){
    this.notificacionesService.limpiar()
  }
}
