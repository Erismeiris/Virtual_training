import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-5',
  standalone: true,
  imports: [],
  templateUrl: './grade-5.component.html',
  styleUrl: './grade-5.component.css'
})
export class Grade5Component {

  listImagesGrade5=["/assets/images/picture5.png","/assets/images/clock.png"]
  imageSourceGrade5: string = this.listImagesGrade5[0];


  grade5ChangueImag(position:number){
    this.imageSourceGrade5 = this.listImagesGrade5[position];
  }

}
