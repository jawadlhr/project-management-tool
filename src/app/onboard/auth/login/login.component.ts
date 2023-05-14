import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LogInComponent {
  loading = false; // Spinner Button Show/Hide on Form Submission
  active = true; // Show/Hide Success Message
  emailExists: any = false; // Show/Hide if Email Exists Message
  passwordExists: any = false; // Show/Hide if Password Exists Message
  userToken: String;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  logInForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
        ),
      ],
    ],
  });
  portalLogIn() {
    this.loading = true;
    if (this.logInForm.valid) {
      this.auth.authenticate(this.logInForm.value).subscribe((response) => {
        if (response.success === false) {
          this.loading = false;
          if (response.message.email) {
            this.emailExists = true;
            this.emailExists = response.message.email;
            this.passwordExists = false;
          } else if (response.message.password) {
            this.passwordExists = true;
            this.passwordExists = response.message.password;
            this.emailExists = false;
          } else if (response.message.active) {
            this.active = false;
          } else {
            console.log(response.message);
          }
        } else {
          this.loading = false;
          // console.log(response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }
}
