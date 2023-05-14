import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserProfileService } from '../../../user-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit {
  canEditBasicInfo: Boolean = true;
  loading: Boolean = true;
  profileData!: any;

  genders = [
    { value: 'male', viewValue: 'Male' },
    { value: 'famale', viewValue: 'Female' },
    { value: 'not specified', viewValue: 'Not Specified' },
  ];

  constructor(
    private fb: FormBuilder,
    private profileService: UserProfileService,
    private route: ActivatedRoute
  ) {}

  basicInfoForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    username: [''],
    gender: [''],
    dob: [''],
  });

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

  saveBasicInfo() {
    this.route.params.subscribe((params) => {
      const username = params['username'];
      this.profileService
        .editProfile(username, this.basicInfoForm.value)
        .subscribe((response) => {
          console.log(response);
        });
    });
  }
}
