import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {
  imgPath?: string;

  constructor() { }

  onFileSelected(event:any) {
    const file: File = event.target.files[0];
  
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      const formData = new FormData();
      formData.append('file', file);
      
    }
  }
}
