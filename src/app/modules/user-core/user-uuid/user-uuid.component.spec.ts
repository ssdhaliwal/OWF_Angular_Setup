import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUUIDComponent } from './user-uuid.component';

describe('UserUUIDComponent', () => {
  let component: UserUUIDComponent;
  let fixture: ComponentFixture<UserUUIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUUIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUUIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
