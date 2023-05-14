import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  authUrl = 'https://web.fixitkb.com/api/';

  constructor(private http: HttpClient, private router: Router) {}

  userProfile(username: any) {
    return this.http.get<any>(this.authUrl + username);
  }

  editProfile(username: any, client: any) {
    return this.http.put<any>(this.authUrl + username, client);
  }
}
