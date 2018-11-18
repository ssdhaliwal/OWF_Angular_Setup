import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardsComponent } from './user-dashboards.component';

describe('UserDashboardsComponent', () => {
  let component: UserDashboardsComponent;
  let fixture: ComponentFixture<UserDashboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
