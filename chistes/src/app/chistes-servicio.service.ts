import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChistesServicioService {

  constructor(private http: HttpClient) {}

  obtenerChiste() {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }
  obtenerCategorias(){
    return this.http.get('https://api.chucknorris.io/jokes/categories');
  }
}
