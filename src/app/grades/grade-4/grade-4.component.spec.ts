import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade4Component } from './grade-4.component';

describe('Grade4Component', () => {
  let component: Grade4Component;
  let fixture: ComponentFixture<Grade4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grade4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Grade4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
