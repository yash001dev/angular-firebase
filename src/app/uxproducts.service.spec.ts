import { TestBed } from '@angular/core/testing';

import { UxproductsService } from './uxproducts.service';

describe('UxproductsService', () => {
  let service: UxproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UxproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
