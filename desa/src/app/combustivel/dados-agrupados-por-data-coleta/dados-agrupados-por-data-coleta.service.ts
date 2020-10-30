import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from './dados-agrupados-por-data-coleta.model';

@Injectable({
  providedIn: 'root'
})
export class DadosAgrupadosPorDataColetaService {
  [x: string]: any;

  private url = "https://combustivelapp.herokuapp.com/api/combustivel/dados-agrupados-por-data-coleta";

  constructor(private http: HttpClient) { }

  getDataColetas(): Observable<ResponseData> {
    return this.http.get<ResponseData>(this.url); 


    
  }
}
