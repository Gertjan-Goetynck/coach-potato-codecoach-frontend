import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachMainNavComponent } from './coach-main-nav.component';

describe('CoachMainNavComponent', () => {
  let component: CoachMainNavComponent;
  let fixture: ComponentFixture<CoachMainNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachMainNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
