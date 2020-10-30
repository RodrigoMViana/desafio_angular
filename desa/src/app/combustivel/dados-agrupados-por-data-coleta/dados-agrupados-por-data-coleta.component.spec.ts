import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosAgrupadosPorDataColetaComponent } from './dados-agrupados-por-data-coleta.component';

describe('DadosAgrupadosPorDataColetaComponent', () => {
  let component: DadosAgrupadosPorDataColetaComponent;
  let fixture: ComponentFixture<DadosAgrupadosPorDataColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosAgrupadosPorDataColetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAgrupadosPorDataColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
