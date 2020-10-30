import { TestBed } from '@angular/core/testing';

import { DadosPorSiglaService } from './dados-por-sigla.service';

describe('DadosPorSiglaService', () => {
  let service: DadosPorSiglaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosPorSiglaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
