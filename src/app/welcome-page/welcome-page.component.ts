import { Component,HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Grade4Component } from '../grades/grade-4/grade-4.component';
import { Grade5Component } from '../grades/grade-5/grade-5.component';
import { Grade6Component } from '../grades/grade-6/grade-6.component';
import { Grade7Component } from '../grades/grade-7/grade-7.component';


@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTooltipModule,
    Grade4Component,
    Grade5Component,
    Grade6Component,
    Grade7Component    

  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent implements AfterViewInit {
 
  window!: Window;
  
  @ViewChild('header') header?: ElementRef;
  
   scroll = window.scrollY;

   ngAfterViewInit(){
    console.log(this.header);
   }
   

   
   list_images: string[] =["/assets/images/download_openboard.png","/assets/images/tool_bar_left.png"]
   image_source: string = this.list_images[0];

  constructor( ){
    
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e:any) {
    this.scroll = window.scrollY; 
    if(this.scroll > 10){
      this.header?.nativeElement.classList.add('bg-blue-500');
    }else{
      this.header?.nativeElement.classList.remove('bg-blue-500');
    } 
  }
    
  navigateToPage() {
     window.open('/form_attendance_register', '_blank');
  } 

  

 

  changeImg(position: number){
    this.image_source = this.list_images[position];
  }
       

}
