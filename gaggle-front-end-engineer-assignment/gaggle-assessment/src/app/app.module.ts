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
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    HeaderComponent,
    MainLayoutComponent,
    LoginComponent,
    HomeComponent,
    FormFieldComponent,
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
