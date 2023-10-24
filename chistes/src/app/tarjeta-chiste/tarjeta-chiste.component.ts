import { Component } from '@angular/core';
import { ChistesServicioService } from '../chistes-servicio.service';
@Component({
  selector: 'app-tarjeta-chiste',
  templateUrl: './tarjeta-chiste.component.html',
  styleUrls: ['./tarjeta-chiste.component.css']
})
export class TarjetaChisteComponent {
  chiste:any;
  constructor(private service:ChistesServicioService){}

  mostrarChiste(){
    this.service.obtenerChiste().subscribe((chisteRecibido)=>{ this.chiste=chisteRecibido})
  }
}
