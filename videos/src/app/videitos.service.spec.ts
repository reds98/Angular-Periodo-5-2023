import { TestBed } from '@angular/core/testing';

import { VideitosService } from './videitos.service';

describe('VideitosService', () => {
  let service: VideitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
