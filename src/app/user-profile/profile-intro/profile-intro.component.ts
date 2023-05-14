import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IntroDialogComponent } from './intro-dialog/intro-dialog.component';
import { UserProfileService } from '../user-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile-intro',
  templateUrl: './profile-intro.component.html',
  styleUrls: ['./profile-intro.component.scss'],
})
export class ProfileIntroComponent implements OnInit {
  profileData!: any;

  constructor(
    public dialog: MatDialog,
    private profileService: UserProfileService,
    private route: ActivatedRoute
  ) {}

  openIntroDialog() {
    this.dialog.open(IntroDialogComponent, { disableClose: true });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const username = params['username'];
      this.profileService.userProfile(username).subscribe((response) => {
        if (response.success) {
          this.profileData = response.client;
        } else {
          console.log(response);
        }
      });
    });
  }
}
