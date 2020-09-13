import { TestBed } from '@angular/core/testing';

import { ManufacturerServiceService } from './manufacturer-service.service';

describe('ManufacturerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManufacturerServiceService = TestBed.get(ManufacturerServiceService);
    expect(service).toBeTruthy();
  });
});
