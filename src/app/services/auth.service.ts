import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, User, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly googleProvider = new GoogleAuthProvider();

  constructor() { }
  get userState$() {
    return authState(this.auth);
  }

  async signInGoogle(): Promise<void> {
    try {
      await signInWithRedirect(this.auth, this.googleProvider); 
      this.router.navigate(['/welcome']);     
    } catch (error) {
      console.log('Google login', error);
    }
  }


  async signUp(email: string, password: string): Promise<void> {
    try {
      const { user } = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      await this.sendEmailVerification(user);
      this.router.navigate(['/user/email-verification']);
    } catch (error: unknown) {
      const { code, message } = error as { code: string; message: string }
      console.log('Code ', code);
      console.log('Message ', message);
    }
  }
  sendEmailVerification(user: User) {
    throw new Error('Method not implemented.');
  }

  async signIn(email: string, password: string): Promise<void> {
    try {
      const { user } = await signInWithEmailAndPassword(this.auth, email, password);
      this.checkUserIsVerified(user);
  } catch (error: unknown) {
    const { code, message } = error as { code: string; message: string };
    console.log('Code ', code);
    console.log('Message ', message);
  }
  }

  private checkUserIsVerified(user: User): void {
    const route = user.emailVerified ? '/user/profile' : '/user/email-verification';
    this.router.navigate([route]);
  }
}


