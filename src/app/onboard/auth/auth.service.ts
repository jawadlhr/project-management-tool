import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Password and Conform Password Validation
  PasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  authUrl = 'https://web.fixitkb.com/api/';
  // authUrl = 'https://pn31k.sse.codesandbox.io/api/';

  constructor(private http: HttpClient, private router: Router) {}

  // Registration
  register(client): Observable<any> {
    return this.http.post(this.authUrl + 'register', client);
  }

  // Activation
  activate(token, body): Observable<any> {
    return this.http.put(this.authUrl + 'activate/' + token, body);
  }

  // Authentication (Login)
  authenticate(client): Observable<any> {
    return this.http.post(this.authUrl + 'authenticate', client);
  }

  // Resend Activation Link
  resend(client): Observable<any> {
    return this.http.put(this.authUrl + 'resend', client);
  }

  // Forgot Password
  forgot(client): Observable<any> {
    return this.http.put(this.authUrl + 'forgot', client);
  }

  // Verify Reset Password Link
  resetLink(token): Observable<any> {
    return this.http.get(this.authUrl + 'reset/' + token);
  }

  // Reset Password
  reset(token, body): Observable<any> {
    return this.http.put(this.authUrl + 'reset/' + token, body);
  }

  // To check token for Logged in Users
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  // Remove token on Log out
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  // Get Token
  getToken() {
    return localStorage.getItem('token');
  }
}
