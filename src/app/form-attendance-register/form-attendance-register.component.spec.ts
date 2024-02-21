import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAttendanceRegisterComponent } from './form-attendance-register.component';

describe('FormAttandanceRegisterComponent', () => {
  let component: FormAttendanceRegisterComponent;
  let fixture: ComponentFixture<FormAttendanceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAttendanceRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAttendanceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
