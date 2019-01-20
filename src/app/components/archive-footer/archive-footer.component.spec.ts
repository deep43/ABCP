import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveFooterComponent } from './archive-footer.component';

describe('ArchiveFooterComponent', () => {
  let component: ArchiveFooterComponent;
  let fixture: ComponentFixture<ArchiveFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
