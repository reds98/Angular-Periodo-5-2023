import { Component } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent {
  titulo:string="El mejor anuncio"
  costo:number=12000

  saludarUsuario(){
    alert("Hola como estas :)")
  }

  incrementarCosto(){
    this.costo=this.costo+1
  }

  cambiarTexto(){
    this.titulo="Nuevo titulo"
  }

}
