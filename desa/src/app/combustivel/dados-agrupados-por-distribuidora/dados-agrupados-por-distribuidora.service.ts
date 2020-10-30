import { Injectable } from '@angular/core';
import { ResponseDistribuidora } from './dados-agrupados-por-distribuidora.model';
import { Observable  } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DadosAgrupadosPorDistribuidoraService {

  [x: string]: any;

  private url = "https://combustivelapp.herokuapp.com/api/combustivel/dados-agrupados-por-distribuidora";

  constructor(private http: HttpClient) { }

  getDistribuidora(): Observable<ResponseDistribuidora> {
      return this.http.get<ResponseDistribuidora>(this.url);
  }
}



