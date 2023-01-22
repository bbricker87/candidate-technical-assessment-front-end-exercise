import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-register-account-dialog',
  templateUrl: './register-account-dialog.component.html',
  styleUrls: ['./register-account-dialog.component.scss'],
})
export class RegisterAccountDialogComponent {
  public registerForm: FormGroup = new FormGroup([]);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private dialogRef: MatDialogRef<RegisterAccountDialogComponent>
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
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
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.email,
      ]),
    });
  }

  get username() {
    return this.registerForm.controls['username'] as FormControl;
  }

  get password() {
    return this.registerForm.controls['password'] as FormControl;
  }

  get email() {
    return this.registerForm.controls['email'] as FormControl;
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.username.value, this.password.value);

      this.dialogRef.close({ success: true });
    }
  }
}
