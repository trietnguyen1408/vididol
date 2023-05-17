import { TestBed } from '@angular/core/testing';

import { StarProfileService } from './star-profile.service';

describe('StarProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarProfileService = TestBed.get(StarProfileService);
    expect(service).toBeTruthy();
  });
});
