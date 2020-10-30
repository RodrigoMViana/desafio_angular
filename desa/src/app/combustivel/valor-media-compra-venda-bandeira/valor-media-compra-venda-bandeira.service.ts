import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseBandeira } from './valor-media-compra-venda-bandeira.model';

@Injectable({
  providedIn: 'root'
})
export class ValorMediaCompraVendaBandeiraService {
  [x: string]: any;

  private url = "https://combustivelapp.herokuapp.com/api/combustivel/valor-media-compra-venda-bandeira";

  constructor(private http: HttpClient) { }

  getBandeira(): Observable<ResponseBandeira> {
    return this.http.get<ResponseBandeira>(this.url); 


  }
  }