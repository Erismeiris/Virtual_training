import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import jsPdf from 'jspdf';
import { CommonModule, NgFor } from '@angular/common';

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
  traderName:string = 'Erismeiris Hidalgo Reyes';
  trainingDescription:string = 'Use computer on the Mathematics Lesson';
  ppm:string = '0.5';
  subject:string = 'Mathematics';
  target:string = 'Grade 4 - 7';
  venue:string = 'Room 1';
  date:string = '2020-01-01';
  startTime:string = "15:00:00"
  endTime:string = "18:00:00"
  persalNumber:any = 123456789 

  noHours: number = this.calculateNoHours(this.startTime, this.endTime);
  calculateNoHours(startTime: string, endTime: string): number {
    const start = new Date(`2000-01-01 ${startTime}`);
    const end = new Date(`2000-01-01 ${endTime}`);
    const diff = end.getTime() - start.getTime();
    const hours = diff / (1000 * 60 * 60);
    return hours;
  }
  participants = [
    {surname: 'Hidalgo Reyes',
    initials: 'E',        
    persalNumber: '123456789',
    workplace: 'School A',
    rank_pl: '1',
    grade: '4',
    gender:"M",
    race: 'Black',
    disability: 'No',
    age: '30',
    contact: '1234567890',
    email: 'erismeidis@gmail.com' },
    {surname: 'Hidalgo Reyes',
    initials: 'E',        
    persalNumber: '8956585',
    workplace: 'School A',
    rank_pl: '1',
    grade: '4',
    gender:"M",
    race: 'Black',
    disability: 'No',
    age: '30',
    contact: '1565685',
    email: 'erismeidis@gmail.com' }

  ]
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
