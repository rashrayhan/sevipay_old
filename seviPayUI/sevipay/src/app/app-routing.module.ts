import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BottomsheetComponent } from './pages/bottomsheet/bottomsheet.component';


const routes: Routes = [
  {path: '', redirectTo: 'pages/auth', pathMatch: 'full' },
  {path: 'pages/auth', component: WelcomeComponent},
  {path: 'pages/admin', component: LoginComponent},
  {path: 'pages/dashboard', component: DashboardComponent},
  {path: 'pages/bottomsheet', component: BottomsheetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent];
