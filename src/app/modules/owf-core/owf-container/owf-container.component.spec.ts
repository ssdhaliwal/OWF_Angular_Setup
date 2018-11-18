import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwfContainerComponent } from './owf-container.component';

describe('OwfContainerComponent', () => {
  let component: OwfContainerComponent;
  let fixture: ComponentFixture<OwfContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwfContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwfContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
