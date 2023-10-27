import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideitosService {

  constructor(private http:HttpClient) { }
  obtenerVideos(){
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=qn4rBXJ9dX5ry4Ia7XAJr4hux4ddzyZd')
  }
}
