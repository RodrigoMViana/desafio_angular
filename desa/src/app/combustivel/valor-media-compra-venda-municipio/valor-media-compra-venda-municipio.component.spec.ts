import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorMediaCompraVendaMunicipioComponent } from './valor-media-compra-venda-municipio.component';

describe('ValorMediaCompraVendaMunicipioComponent', () => {
  let component: ValorMediaCompraVendaMunicipioComponent;
  let fixture: ComponentFixture<ValorMediaCompraVendaMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorMediaCompraVendaMunicipioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorMediaCompraVendaMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
