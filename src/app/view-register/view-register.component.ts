import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import jsPdf from 'jspdf';
import { CommonModule, NgFor } from '@angular/common';
import { Participant, Register } from '../interfaces/all-interfaces';
import { CrudService } from '../services/crud.service';
import { ParticipantsService } from '../services/participants.service';

@Component({
  selector: 'app-view-register',
  standalone: true,
  imports: [
    NgFor,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './view-register.component.html',
  styleUrl: './view-register.component.css'
})
export class ViewRegisterComponent {
  public registerHeader!: Register 
  public startTime!: string;
  public endTime!: string;
  public noHours!: number;
  public noMinutes!: number;
  public males!: number;
  public females!: number;
  public races = {
    'African': 0,
    'Coloured': 0,
    'Indian': 0,
    'White': 0,
    'Asian': 0
  }

  public participants: Participant[] = []

  constructor(private registerServices: CrudService, private participantsServices: ParticipantsService) {
    this.registerServices.getRegisterAttendance().subscribe((data: any) => {
      this.registerHeader =  data[0];
      const {start_time, end_time} = this.registerHeader;
      this.calculateNoHours(start_time, end_time);
    });
    this.participantsServices.getParticipants().subscribe((data: any) => {
      this.participants = data;
      
      this.males = this.participants.filter((participant: Participant) => participant.gender === 'M').length;
      this.females = this.participants.filter((participant: Participant) => participant.gender === 'F').length;
      this.races.African = this.participants.filter((participant: Participant) => participant.race === 'african').length;
      this.races.Coloured = this.participants.filter((participant: Participant) => participant.race === 'coloured').length;
      this.races.Indian = this.participants.filter((participant: Participant) => participant.race === 'indian').length;
      this.races.White = this.participants.filter((participant: Participant) => participant.race === 'white').length;
      this.races.Asian = this.participants.filter((participant: Participant) => participant.race === 'asian').length;
      


        

    });
  }
  
  calculateNoHours(startTime: string, endTime: string) {
    const start = new Date(`2000-01-01 ${startTime}`);
    const end = new Date(`2000-01-01 ${endTime}`);
    const diff = end.getTime() - start.getTime();
    const hours = diff / (1000 * 60 * 60);
    const minutes = (diff / (1000 * 60)) % 60;
    this.noHours = Math.floor(hours);
    this.noMinutes = Math.floor(minutes);    
  } 

 
  download() {    
    const doc = new jsPdf("landscape",'pt','a4');
    const tablePrint = document.getElementById('content');
    const margin = {
      top: 40,
      right: 40,
      bottom: 40,
      left: 40
    }
    if (tablePrint) {
      const scale = (doc.internal.pageSize.width - margin.left - margin.right) / document.body.clientWidth;
      doc.html(tablePrint,{
        x: margin.left,
        y: margin.top,
        html2canvas: {
          scale
        }
      }).then(() => {
        doc.save('table.pdf');
      });
      
    } else {
      console.error('Table not found');
    }
    }

}
