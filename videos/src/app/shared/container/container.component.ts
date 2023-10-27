import { Component } from '@angular/core';
import { VideitosService } from 'src/app/videitos.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  data:any;
  constructor(private servicio:VideitosService){}
  cargarVideos(){
    this.servicio.obtenerVideos().subscribe((information:any)=>this.data=information.data)

  }
}
