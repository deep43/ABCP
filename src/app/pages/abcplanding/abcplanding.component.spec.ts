import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCPLandingComponent } from './abcplanding.component';

describe('ABCPLandingComponent', () => {
  let component: ABCPLandingComponent;
  let fixture: ComponentFixture<ABCPLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABCPLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABCPLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
