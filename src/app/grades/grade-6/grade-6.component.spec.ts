import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grade6Component } from './grade-6.component';

describe('Grade6Component', () => {
  let component: Grade6Component;
  let fixture: ComponentFixture<Grade6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grade6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Grade6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
