import { TestBed } from '@angular/core/testing';

import { ValorMediaCompraVendaMunicipioService } from './valor-media-compra-venda-municipio.service';

describe('ValorMediaCompraVendaMunicipioService', () => {
  let service: ValorMediaCompraVendaMunicipioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorMediaCompraVendaMunicipioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
