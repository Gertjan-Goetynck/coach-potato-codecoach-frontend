import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoachInformationComponent } from './edit-coach-information.component';

describe('EditCoachInformationComponent', () => {
  let component: EditCoachInformationComponent;
  let fixture: ComponentFixture<EditCoachInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCoachInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoachInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
