import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UploadImgService } from '../services/upload-img.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-attendance-register',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './create-attendance-register.component.html',
  styleUrl: './create-attendance-register.component.css'
})
export class CreateAttendanceRegisterComponent {
  private fb = inject(FormBuilder);
 
  
  public attendanceForm: FormGroup = this.fb.group({
    activity_type:['', Validators.required],
    activity_title:['', Validators.required],
    name_of_trainer:['', Validators.required],
    description:['', Validators.required],
    ppm:[0, Validators.required],
    subject:['', Validators.required],
    target_group:['', Validators.required],
    venue:[''],
    date: ['', Validators.required],
    accredited: new FormControl(''),
    nqf_level: [''],
    start_time: ['', Validators.required],
    end_time: ['', Validators.required],
    equity_targets: 0,    
  });




  constructor(private uploadImgService: UploadImgService, private registerServices: CrudService, private router: Router) {
    
  }

  onFileSelected(event:any) {
    this.uploadImgService.onFileSelected(event);
  }

  sendAttendanceForm() {   
      this.registerServices.createRegisterAttendance(this.attendanceForm.value).then(() => {
        console.log('Registro creado con éxito');
        this.router.navigate(['/view_attendance_register']);
      }).catch((error) => { 
        console.log('Error al crear el registro', error);
      }
      );
  }


}
