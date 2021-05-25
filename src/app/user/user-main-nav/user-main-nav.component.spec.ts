import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainNavComponent } from './user-main-nav.component';

describe('UserMainNavComponent', () => {
  let component: UserMainNavComponent;
  let fixture: ComponentFixture<UserMainNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMainNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
