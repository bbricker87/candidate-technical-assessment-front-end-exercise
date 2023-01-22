import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from '@app/layouts/main-layout/main-layout.component';
import { HeaderComponent } from '@app/layouts/header/header.component';
import { AuthLayoutComponent } from '@app/layouts/auth-layout/auth-layout.component';

import { MaterialModule } from './shared/material.module';
import { ComponentsModule } from './shared/components.module';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterAccountComponent } from './components/auth/register-account/register-account.component';
import { RegisterAccountDialogComponent } from './dialogs/register-account-dialog/register-account-dialog.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ForgotPasswordDialogComponent } from './dialogs/forgot-password-dialog/forgot-password-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    HeaderComponent,
    MainLayoutComponent,
    LoginComponent,
    HomeComponent,
    FormFieldComponent,
    RegisterAccountComponent,
    RegisterAccountDialogComponent,
    ForgotPasswordComponent,
    ForgotPasswordDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
