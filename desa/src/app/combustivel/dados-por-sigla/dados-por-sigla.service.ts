import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseSigla } from './dados-por-sigla.model';

@Injectable({
  providedIn: 'root'
})
export class DadosPorSiglaService{
  [x: string]: any;

  private url = "https://combustivelapp.herokuapp.com/api/combustivel/dados-por-sigla/<string>";

  constructor(private http: HttpClient) { }

  getPreco(): Observable<ResponseSigla> {
    return this.http.get<ResponseSigla>(this.url); 


    
  }
}
