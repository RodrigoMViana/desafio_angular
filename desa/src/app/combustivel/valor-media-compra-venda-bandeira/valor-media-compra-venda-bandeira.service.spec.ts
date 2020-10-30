import { TestBed } from '@angular/core/testing';

import { ValorMediaCompraVendaBandeiraService } from './valor-media-compra-venda-bandeira.service';

describe('ValorMediaCompraVendaBandeiraService', () => {
  let service: ValorMediaCompraVendaBandeiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorMediaCompraVendaBandeiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
