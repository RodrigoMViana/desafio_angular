import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaDePrecoComponent } from './media-de-preco.component';

describe('MediaDePrecoComponent', () => {
  let component: MediaDePrecoComponent;
  let fixture: ComponentFixture<MediaDePrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaDePrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaDePrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
