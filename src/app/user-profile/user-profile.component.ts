import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  profilePic = ['https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg'];
  coverImg = ['https://imagizer.imageshack.com/img921/9628/VIaL8H.jpg'];  
  profileData!: any;
  username: any;
  constructor(private profileService: UserProfileService, private route: ActivatedRoute, private router: Router){}
  
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

  selectProfilePic(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: any) => {
        this.profilePic = e.target.result;
      };
    }
  }

  selectCoverImg(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: any) => {
        this.coverImg = e.target.result;
      };
    }
  }

}
