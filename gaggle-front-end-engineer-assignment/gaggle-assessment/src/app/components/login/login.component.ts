import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup([]);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(`^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$`),
      ]),
    });
  }

  get username() {
    return this.loginForm.controls['username'] as FormControl;
  }

  get password() {
    return this.loginForm.controls['password'] as FormControl;
  }
}
