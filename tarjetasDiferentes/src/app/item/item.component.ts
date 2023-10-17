import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input() imagen:string= 'https://www.codespeedy.com/wp-content/uploads/2019/03/Chrome-Broken-Image-Icon.png';
 @Input()titulo:string ='Titulo VACILON';
 @Input() precio:number=90

 bandera:boolean=false


 mostrarContenidoExtra(){
  this.bandera=true;
 }

}
