import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePreco } from './media-de-preco.model';

@Injectable({
  providedIn: 'root'
})
export class MediaDePrecoService {
  [x: string]: any;

  private url = "https://combustivelapp.herokuapp.com/api/combustivel/media-de-preco/<string>";

  constructor(private http: HttpClient) { }

  getPreco(): Observable<ResponsePreco> {
    return this.http.get<ResponsePreco>(this.url); 


    
  }
}
