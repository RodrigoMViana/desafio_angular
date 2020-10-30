import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPorSiglaComponent } from './dados-por-sigla.component';

describe('DadosPorSiglaComponent', () => {
  let component: DadosPorSiglaComponent;
  let fixture: ComponentFixture<DadosPorSiglaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPorSiglaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPorSiglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
