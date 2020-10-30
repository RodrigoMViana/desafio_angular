import { Component, OnInit } from '@angular/core';
import { ValorMediaCompraVendaMunicipioService } from './valor-media-compra-venda-municipio.service';
import { ResponseMunicipio } from './valor-media-compra-venda-municipio.model';

@Component({
  selector: 'app-valor-media-compra-venda-municipio',
  templateUrl: './valor-media-compra-venda-municipio.component.html',
  styleUrls: ['./valor-media-compra-venda-municipio.component.css']
})
export class ValorMediaCompraVendaMunicipioComponent implements OnInit {

  responseMunicipio: ResponseMunicipio;

  constructor(private valorMediaCompraVendaMunicipioService: ValorMediaCompraVendaMunicipioService) { }

  ngOnInit(): void {

    this.valorMediaCompraVendaMunicipioService.getMunicipio().subscribe(res => this.responseMunicipio  = res)

  }

}