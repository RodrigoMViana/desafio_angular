import { TestBed } from '@angular/core/testing';

import { DadosAgrupadosPorDistribuidoraService } from './dados-agrupados-por-distribuidora.service';

describe('DadosAgrupadosPorDistribuidoraService', () => {
  let service: DadosAgrupadosPorDistribuidoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosAgrupadosPorDistribuidoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
