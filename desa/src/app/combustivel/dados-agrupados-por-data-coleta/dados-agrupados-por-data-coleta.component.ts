import { Component, OnInit } from '@angular/core';
import { DadosAgrupadosPorDataColetaService } from './dados-agrupados-por-data-coleta.service';
import { ResponseData } from './dados-agrupados-por-data-coleta.model';

@Component({
  selector: 'app-dados-agrupados-por-data-coleta',
  templateUrl: './dados-agrupados-por-data-coleta.component.html',
  styleUrls: ['./dados-agrupados-por-data-coleta.component.css']
})
export class DadosAgrupadosPorDataColetaComponent implements OnInit {

  responseData: ResponseData;

  constructor(private dadosAgrupadosPorDataColetaService: DadosAgrupadosPorDataColetaService) { }

  ngOnInit(): void {

    this.dadosAgrupadosPorDataColetaService.getDataColetas().subscribe(res => this.responseData  = res)

  }

}



