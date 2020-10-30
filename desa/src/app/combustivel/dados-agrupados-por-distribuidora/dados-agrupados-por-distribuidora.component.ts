import { Component, OnInit } from '@angular/core';
import { ResponseDistribuidora } from './dados-agrupados-por-distribuidora.model';
import { DadosAgrupadosPorDistribuidoraService } from './dados-agrupados-por-distribuidora.service'

@Component({
  selector: 'app-dados-agrupados-por-distribuidora',
  templateUrl: './dados-agrupados-por-distribuidora.component.html',
  styleUrls: ['./dados-agrupados-por-distribuidora.component.css']
})
export class DadosAgrupadosPorDistribuidoraComponent implements OnInit {

  responseDistribuidora: ResponseDistribuidora;

  constructor(private dadosAgrupadosPorDistribuidoraService: DadosAgrupadosPorDistribuidoraService) { }

  ngOnInit(): void {
      this.dadosAgrupadosPorDistribuidoraService.getDistribuidora().subscribe( res => this.responseDistribuidora = res)

      
  }

}





