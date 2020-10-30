import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAgrupadosPorDistribuidoraComponent } from './dados-agrupados-por-distribuidora.component';

describe('DadosAgrupadosPorDistribuidoraComponent', () => {
  let component: DadosAgrupadosPorDistribuidoraComponent;
  let fixture: ComponentFixture<DadosAgrupadosPorDistribuidoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAgrupadosPorDistribuidoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAgrupadosPorDistribuidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
