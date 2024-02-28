import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Participant } from '../interfaces/all-interfaces';
import { ParticipantsService } from '../services/participants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-attendance-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  templateUrl: './form-attendance-register.component.html',
  styleUrl: './form-attendance-register.component.css'
})
export class FormAttendanceRegisterComponent {

  public participants!: Participant;
  public readonly fb = new FormBuilder();
  public participantServices = inject(ParticipantsService);
  public router = inject(Router);


  public participantsForm = this.fb.group({
    surname: ['', Validators.required],
    initials: ['', Validators.required],
    persalNumber: ['', Validators.required],
    distric: ['', Validators.required],
    workplace: ['', Validators.required],
    rank_pl: ['', Validators.required],
    gender : new FormControl('', Validators.required),
    race : new FormControl('', Validators.required),
    disability : new FormControl('', Validators.required),
    qualification: ['', Validators.required],
    grade: ['', Validators.required],
    contact: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', Validators.required]
  });

    


 addParticipant() {
  this.participantServices.createParticipants(this.participantsForm.value).then(() => {
    console.log('Participant added');
    this.participantsForm.reset();
    this.router.navigate(['/view_attendance_register']);
  }).catch((error) => {
    console.log('Error adding participant', error);
  }
  );


    
  }


}
