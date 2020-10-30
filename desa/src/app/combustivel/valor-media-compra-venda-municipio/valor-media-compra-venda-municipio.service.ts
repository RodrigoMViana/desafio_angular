import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseMunicipio  } from './valor-media-compra-venda-municipio.model';

@Injectable({
  providedIn: 'root'
})
export class ValorMediaCompraVendaMunicipioService {
  [x: string]: any;

  private url = "https://combustivelapp.herokuapp.com/api/combustivel/valor-media-compra-venda-municipio";

  constructor(private http: HttpClient) { }

  getMunicipio(): Observable<ResponseMunicipio> {
    return this.http.get<ResponseMunicipio>(this.url); 


  }
  }