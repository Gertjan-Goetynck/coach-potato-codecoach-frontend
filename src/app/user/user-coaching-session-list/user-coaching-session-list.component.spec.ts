import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoachingSessionListComponent } from './user-coaching-session-list.component';

describe('UserCoachingSessionListComponent', () => {
  let component: UserCoachingSessionListComponent;
  let fixture: ComponentFixture<UserCoachingSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoachingSessionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoachingSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
