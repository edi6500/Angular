import { TestBed } from '@angular/core/testing';

import { TokenInterceptoService } from './token-intercepto.service';

describe('TokenInterceptoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenInterceptoService = TestBed.get(TokenInterceptoService);
    expect(service).toBeTruthy();
  });
});
