import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormFieldComponent } from '@app/components/form-field/form-field.component';
import { MaterialModule } from '@app/shared/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@app/services/authentication.service';

const activatedRouteStub = {
  paramMap: {
    returnUrl: '',
  },
};

const authServiceStub = {
  login: (username: string, password: string) => {
    return { success: true };
  },
};

const routerSpy = { navigate: jasmine.createSpy('navigate') };

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, FormFieldComponent],
      imports: [MaterialModule, RouterTestingModule, ReactiveFormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useValue: routerSpy },
        { provide: AuthenticationService, useValue: authServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form', () => {
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('validPassword1');

    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should have an invalid form', () => {
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('invalidPassword');

    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should submit', () => {
    spyOn(component, 'login');
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('validPassword1');

    const signOn = fixture.nativeElement.querySelector('.m-loginForm__button');
    signOn.click();

    expect(component.login).toHaveBeenCalledTimes(1);
  });
});
