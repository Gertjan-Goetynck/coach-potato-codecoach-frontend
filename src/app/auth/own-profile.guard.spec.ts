import { TestBed } from '@angular/core/testing';

import { OwnProfileGuard } from './own-profile.guard';

describe('OwnProfileGuard', () => {
  let guard: OwnProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OwnProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
