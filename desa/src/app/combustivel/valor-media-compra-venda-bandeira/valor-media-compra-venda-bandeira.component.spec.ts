import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorMediaCompraVendaBandeiraComponent } from './valor-media-compra-venda-bandeira.component';

describe('ValorMediaCompraVendaBandeiraComponent', () => {
  let component: ValorMediaCompraVendaBandeiraComponent;
  let fixture: ComponentFixture<ValorMediaCompraVendaBandeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorMediaCompraVendaBandeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorMediaCompraVendaBandeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
