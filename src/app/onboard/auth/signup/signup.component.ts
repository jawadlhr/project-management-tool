import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'portal-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignUpComponent {
  hide = true; // Confirm Password Show/Hide Toggle
  loading = false; // Spinner Button Show/Hide on Form Submission
  emailExists: any = false; // Show/Hide if Email Exists Message
  usernameExists: any = false; // Show/Hide if Username Exists Message
  success = false; // Show/Hide Success Message

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  signUpForm = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z0-9-]+$'),
        ],
      ],
      phone: ['', [Validators.pattern('[- +()0-9]+')]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: this.auth.PasswordValidator('password', 'confirmPassword'),
    }
  );

  portalSignUp() {
    this.loading = true;
    if (this.signUpForm.valid) {
      this.auth.register(this.signUpForm.value).subscribe((response) => {
        // console.log(response);
        if (response.success === false) {
          this.loading = false;

          if (response.message.email && response.message.username) {
            this.emailExists = true;
            this.usernameExists = true;
            this.emailExists = response.message.email;
            this.usernameExists = response.message.username;
          } else if (response.message.email) {
            this.emailExists = true;
            this.emailExists = response.message.email;
            this.usernameExists = false;
          } else if (response.message.username) {
            this.usernameExists = true;
            this.usernameExists = response.message.username;
            this.emailExists = false;
          } else {
            console.log(response.message);
          }
        } else {
          this.loading = false;
          this.success = true;
        }
      });
    }
  }
}
