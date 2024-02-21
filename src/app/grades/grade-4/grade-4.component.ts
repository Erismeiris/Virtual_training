import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-4',
  standalone: true,
  imports: [],
  templateUrl: './grade-4.component.html',
  styleUrl: './grade-4.component.css'
})
export class Grade4Component {

  listImagesGrade4=["/assets/images/picture1.jpg","/assets/images/picture2.jpg","/assets/images/picture3.jpg"]
    imageSourceGrade4: string = this.listImagesGrade4[0];

    grade4ChangueImag(position:number){
      this.imageSourceGrade4 = this.listImagesGrade4[position];
    }

}
