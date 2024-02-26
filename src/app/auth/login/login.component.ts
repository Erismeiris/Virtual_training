import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  loginFrom!: FormGroup;

  private readonly fb!: FormBuilder;
  private readonly emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  private initForm(): void {
    this.loginFrom = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  constructor(fb: FormBuilder, private readonly authService: AuthService, private router: Router) {
    this.fb = fb;
    this.initForm();    
  }
  hasError(fild:string): boolean {
    const fieldName = this.loginFrom.get(fild);
    return fieldName?.invalid as boolean && fieldName?.touched as boolean;
  }

  onSubmit(): void {
    console.log(this.loginFrom.value);
  }

  googleLogin(): void {
    this.authService.signInGoogle();  
    this.router.navigate(['/welcome']);  
      
  }

  

}
