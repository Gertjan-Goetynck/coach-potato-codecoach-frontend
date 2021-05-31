import { TestBed } from '@angular/core/testing';

import { CoachingSessionService } from './coaching-session.service';

describe('CoachingSessionService', () => {
  let service: CoachingSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachingSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
