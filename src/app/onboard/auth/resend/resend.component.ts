import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'resend-link',
  templateUrl: './resend.component.html',
  styleUrls: ['./resend.component.scss'],
})
export class ResendComponent {
  loading = false; // Spinner Button Show/Hide on Form Submission
  emailExists: any = false; // Show/Hide if Email Exists Message
  activated: any = false; // Show/Hide if Account already Activated
  active: any = false; // Show/Hide Result Section

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  resendForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
      ],
    ],
  });
  resendLink() {
    this.loading = true;
    if (this.resendForm.valid) {
      this.auth.resend(this.resendForm.value).subscribe((response) => {
        // console.log(response);
        if (response.success === false) {
          this.loading = false;
          if (response.message.email) {
            this.emailExists = true;
            this.emailExists = response.message.email;
            this.activated = false;
          } else if (response.message.active) {
            this.activated = true;
            this.activated = response.message.active;
            this.emailExists = false;
          } else {
            console.log(response.message);
          }
        } else {
          this.loading = false;
          this.active = true;
          this.active = response;
        }
      });
    }
  }
}
