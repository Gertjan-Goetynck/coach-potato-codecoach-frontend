import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoachSessionFormComponent } from './create-coach-session-form.component';

describe('CreateCoachSessionFormComponent', () => {
  let component: CreateCoachSessionFormComponent;
  let fixture: ComponentFixture<CreateCoachSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoachSessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoachSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
