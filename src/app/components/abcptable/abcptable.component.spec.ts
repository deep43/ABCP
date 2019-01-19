import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCPTableComponent } from './abcptable.component';

describe('ABCPTableComponent', () => {
  let component: ABCPTableComponent;
  let fixture: ComponentFixture<ABCPTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABCPTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABCPTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
