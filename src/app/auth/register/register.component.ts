import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
  registerForm!: FormGroup;
  private readonly emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';



  private initForm(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  

  constructor( private fb:FormBuilder, private authService: AuthService, private router: Router) {
    this.initForm();
   }

  hasError(fild:string): boolean {
    const fieldName = this.registerForm.get(fild);
    return fieldName?.invalid as boolean && fieldName?.touched as boolean;
  }

    registerFormSubmit(){
      if(this.registerForm.value.password !== this.registerForm.value.repeatPassword){
        alert('Password and Repeat Password do not match');
      } else{
        this.authService.signUp(this.registerForm.value.email, this.registerForm.value.password);
        this.router.navigate(['/welcome']);

      }
    }
  

}
