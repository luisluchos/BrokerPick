import { TestBed } from '@angular/core/testing';

import { TradesResolver } from './trades.resolver';

describe('TradesResolver', () => {
  let resolver: TradesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TradesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
