import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormAttendanceRegisterComponent } from './form-attendance-register/form-attendance-register.component';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { CreateAttendanceRegisterComponent } from './create-attendance-register/create-attendance-register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    { path:'', redirectTo: 'welcome', pathMatch: 'full' },
    {path: 'welcome', component: WelcomePageComponent},
    {path:"form_attendance_register", component: FormAttendanceRegisterComponent},
    {path:"view_attendance_register", component:ViewRegisterComponent},
    {path:"create_attendance_register", component:CreateAttendanceRegisterComponent},
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent}
];
