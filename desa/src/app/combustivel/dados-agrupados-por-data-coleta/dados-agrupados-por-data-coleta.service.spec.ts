import { TestBed } from '@angular/core/testing';

import { DadosAgrupadosPorDataColetaService } from './dados-agrupados-por-data-coleta.service';

describe('DadosAgrupadosPorDataColetaService', () => {
  let service: DadosAgrupadosPorDataColetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosAgrupadosPorDataColetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
