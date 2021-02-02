import { TestBed } from '@angular/core/testing';

import { MoneyApiService } from './money-api.service';

describe('MoneyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneyApiService = TestBed.get(MoneyApiService);
    expect(service).toBeTruthy();
  });
});
