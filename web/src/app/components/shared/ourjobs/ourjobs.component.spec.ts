import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurjobsComponent } from './ourjobs.component';

describe('OurjobsComponent', () => {
  let component: OurjobsComponent;
  let fixture: ComponentFixture<OurjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
