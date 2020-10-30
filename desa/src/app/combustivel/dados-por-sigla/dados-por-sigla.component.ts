import { Component, OnInit } from '@angular/core';
import { ResponseSigla } from './dados-por-sigla.model';
import { DadosPorSiglaService } from './dados-por-sigla.service';

@Component({
  selector: 'app-dados-por-sigla',
  templateUrl: './dados-por-sigla.component.html',
  styleUrls: ['./dados-por-sigla.component.css']
})
export class DadosPorSiglaComponent implements OnInit {

  responseSigla: ResponseSigla;

  constructor(private dadosPorSiglaService: DadosPorSiglaService) { }

  ngOnInit(): void {

    this.dadosPorSiglaService.getSigla().subscribe(res => this.responseSigla  = res)

  }

}



