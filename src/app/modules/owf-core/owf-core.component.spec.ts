import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwfInformationComponent } from './owf-core.component';

describe('OwfInformationComponent', () => {
  let component: OwfInformationComponent;
  let fixture: ComponentFixture<OwfInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwfInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwfInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
