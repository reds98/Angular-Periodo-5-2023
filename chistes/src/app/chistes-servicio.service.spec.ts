import { TestBed } from '@angular/core/testing';

import { ChistesServicioService } from './chistes-servicio.service';

describe('ChistesServicioService', () => {
  let service: ChistesServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChistesServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
