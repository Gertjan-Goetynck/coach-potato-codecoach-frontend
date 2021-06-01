import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCoachingSessionListComponent } from './coach-coaching-session-list.component';

describe('CoachCoachingSessionListComponent', () => {
  let component: CoachCoachingSessionListComponent;
  let fixture: ComponentFixture<CoachCoachingSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachCoachingSessionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachCoachingSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
