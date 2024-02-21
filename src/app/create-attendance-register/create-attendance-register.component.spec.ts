import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAttendanceRegisterComponent } from './create-attendance-register.component';

describe('CreateAttendanceRegisterComponent', () => {
  let component: CreateAttendanceRegisterComponent;
  let fixture: ComponentFixture<CreateAttendanceRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAttendanceRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAttendanceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
