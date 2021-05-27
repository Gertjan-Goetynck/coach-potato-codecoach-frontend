import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachDetailViewComponent } from './coach-detail-view.component';

describe('CoachDetailViewComponent', () => {
  let component: CoachDetailViewComponent;
  let fixture: ComponentFixture<CoachDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
