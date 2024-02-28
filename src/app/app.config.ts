import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { connectAuthEmulator } from 'firebase/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"attendance-register-ca68d","appId":"1:80078411439:web:526fab5801d4ab670c665a","storageBucket":"attendance-register-ca68d.appspot.com","apiKey":"AIzaSyAdj4EGZu8oMGDw_1FAX7t6a37r9HIjZtE","authDomain":"attendance-register-ca68d.firebaseapp.com","messagingSenderId":"80078411439"}))), importProvidersFrom(
    provideAuth(() => {
    const auth = getAuth();

    
      
    return auth
  }

    )), importProvidersFrom(provideFirestore(() => 
    {
     const firestore = getFirestore();


     return firestore

    }
    ))]
};
