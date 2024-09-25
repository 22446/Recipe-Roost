import { TestBed } from '@angular/core/testing';

import { IngrediantsService } from './ingrediants.service';

describe('IngrediantsService', () => {
  let service: IngrediantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngrediantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
