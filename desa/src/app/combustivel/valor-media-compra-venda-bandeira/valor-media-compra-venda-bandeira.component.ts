import { Component, OnInit } from '@angular/core';
import { ValorMediaCompraVendaBandeiraService } from './valor-media-compra-venda-bandeira.service';
import { ResponseBandeira } from './valor-media-compra-venda-bandeira.model';

@Component({
  selector: 'app-valor-media-compra-venda-bandeira',
  templateUrl: './valor-media-compra-venda-bandeira.component.html',
  styleUrls: ['./valor-media-compra-venda-bandeira.component.css']
})
export class ValorMediaCompraVendaBandeiraComponent implements OnInit {

  responseBandeira: ResponseBandeira;

  constructor(private valorMediaCompraVendaBandeiraService: ValorMediaCompraVendaBandeiraService) { }

  ngOnInit(): void {

    this.valorMediaCompraVendaBandeiraService.getBandeira().subscribe(res => this.responseBandeira  = res)

  }

}