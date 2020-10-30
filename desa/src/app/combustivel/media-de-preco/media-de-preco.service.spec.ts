import { TestBed } from '@angular/core/testing';

import { MediaDePrecoService } from './media-de-preco.service';

describe('MediaDePrecoService', () => {
  let service: MediaDePrecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaDePrecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
