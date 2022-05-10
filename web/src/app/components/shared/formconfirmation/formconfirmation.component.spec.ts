import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormconfirmationComponent } from './formconfirmation.component';

describe('FormconfirmationComponent', () => {
  let component: FormconfirmationComponent;
  let fixture: ComponentFixture<FormconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
