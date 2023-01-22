import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup([]);
  public loginError: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

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

  login() {
    if (this.loginForm.valid) {
      const result = this.authService.login(
        this.username.value,
        this.password.value
      );

      console.log(result);

      if (result.success) {
        const returnUrl =
          this.route.snapshot.queryParamMap.get('returnUrl') ?? '';

        console.log(`navigating to ${returnUrl}`);
        this.router.navigate([returnUrl]);
      } else {
        this.loginError = result.message ?? '';
      }
    }
  }
}
