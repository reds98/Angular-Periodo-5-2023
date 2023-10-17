import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  tarjetas = [
    {
      imagen: 'https://img.freepik.com/foto-gratis/perrito-joven-posando-alegre_155003-28765.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1697068800&semt=sph',
      title: 'Tarjeta 1',
      descripcion: 'Descripción de la Tarjeta 1.',
      precio:1000
    },
    {
      imagen: 'https://www.petlife.mx/u/fotografias/m/2023/3/29/f768x1-656_783_64.jpeg',
      title: 'Tarjeta 2',
      descripcion: 'Descripción de la Tarjeta 2.',
      precio:500
    },
    {
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBafmt8JqWEVp_d0RqistL8bUvis6ABg-s2qrJ6uQ&s',
      title: 'Tarjeta 3',
      descripcion: 'Descripción de la Tarjeta 3.',
      precio:2000
    }
  ];
}
