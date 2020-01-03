import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatButtonModule, 
  MatIconModule, MatListModule, MatTabsModule,
  MatCheckboxModule,
   MatSidenavModule,
   MatDividerModule,
   MatStepperModule,
   MatDialogModule,
   MatBottomSheetModule,
   MatRadioModule,
   MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { BottomsheetComponent } from './pages/bottomsheet/bottomsheet.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WelcomeComponent,
    LoginComponent,
    DashboardComponent,
    PaymentsComponent,
    BottomsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatRadioModule
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
