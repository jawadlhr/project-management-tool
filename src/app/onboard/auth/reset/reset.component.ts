import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'reset-password',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  hide = true; // Confirm Password Show/Hide Toggle
  spinner = true; // Loading Spinner on Page
  loading = false; // Spinner Button Show/Hide on Form Submission
  reset: any = false;
  notReset: any = false;
  resetResult: any = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  resetForm = this.fb.group(
    {
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

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const token = params['token'];
      this.auth.resetLink(token).subscribe((response) => {
        //console.log(response);
        if (response.success) {
          this.spinner = false;
          this.reset = true;
        } else {
          this.spinner = false;
          this.notReset = true;
          this.notReset = response;
        }
      });
    });
  }

  resetPassword() {
    this.loading = true;
    this.route.params.subscribe((params) => {
      const token = params['token'];
      this.auth.reset(token, this.resetForm.value).subscribe((response) => {
        console.log(response);
        if (response.success) {
          this.loading = false;
          this.reset = false;
          this.resetResult = true;
          this.resetResult = response;
        } else {
          this.loading = false;
          this.notReset = true;
          this.notReset = response;
        }
      });
    });
  }
}
