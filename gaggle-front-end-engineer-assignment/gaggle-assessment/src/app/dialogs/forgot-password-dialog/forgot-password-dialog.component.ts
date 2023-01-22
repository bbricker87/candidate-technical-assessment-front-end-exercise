import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss'],
})
export class ForgotPasswordDialogComponent {
  public forgotPasswordForm: FormGroup = new FormGroup([]);

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ForgotPasswordDialogComponent>
  ) {}

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.email,
        ]),
      },
      { updateOn: 'blur' }
    );
  }

  get email() {
    return this.forgotPasswordForm.controls['email'] as FormControl;
  }

  reset() {
    this.dialogRef.close({ success: true });
  }
}
