import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UploadImgService } from '../services/upload-img.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

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
  activity:string = 'Workshop';
  topic:string="Using computer to teach Mathematics"
  imgPath:string = '/assets/Workspace_LOGO.png';
  imgAlt:string = 'Workspace Logo';
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private uploadImgService: UploadImgService) {
    
  }

  onFileSelected(event:any) {
    this.uploadImgService.onFileSelected(event);
  
    
  }


}
