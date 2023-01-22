import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgotPasswordDialogComponent } from '@app/dialogs/forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log('Open login dialog');
    this.openForgotPasswordDialog();
  }

  openForgotPasswordDialog() {
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
      width: '465px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result?.success) {
        this.snackbar.open('Email sent to reset password!', '', {
          duration: 3000,
        });
      }

      this.router.navigate(['/auth']);
    });
  }
}
