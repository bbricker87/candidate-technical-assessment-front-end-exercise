import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterAccountDialogComponent } from '@app/dialogs/register-account-dialog/register-account-dialog.component';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss'],
})
export class RegisterAccountComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.openRegisterDialog();
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterAccountDialogComponent, {
      width: '465px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.success) {
        this.snackbar.open('Account registered! You may now sign on.', '', {
          duration: 3000,
        });
      }

      console.log('Navigate to auth');
      this.router.navigate(['/auth']);
    });
  }
}
