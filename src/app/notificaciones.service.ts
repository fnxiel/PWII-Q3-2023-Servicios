import { Injectable } from '@angular/core';
import { INotificacion } from './INotificacion';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  notificaciones: INotificacion[] = []
  constructor() { }

  agregar(titulo: string, mensaje: string, tipo: "Informacion" | "Error" | "Advertencia") {
    this.notificaciones.push({
      //id: 1,
      titulo: titulo,
      mensaje: mensaje,
      tipo: tipo
    })
  }

  limpiar() {
    this.notificaciones = []
  }


}
