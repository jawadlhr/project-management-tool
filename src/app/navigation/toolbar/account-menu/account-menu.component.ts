import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../onboard/auth/auth.service';

@Component({
  selector: 'toolbar-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss'],
})
export class AccountMenuComponent {
  constructor(public auth: AuthService, private router: Router) {}

  // Remove token on Log out
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
