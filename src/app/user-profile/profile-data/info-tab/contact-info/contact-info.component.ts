import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserProfileService } from '../../../user-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent {
  canEditContactInfo: Boolean = true;
  loading: Boolean = true;
  profileData!: any;

  constructor(
    private fb: FormBuilder,
    private profileService: UserProfileService,
    private route: ActivatedRoute
  ) {}

  contactInfoForm = this.fb.group({
    phone: [''],
    email: [''],
    location: [''],
    website: [''],
    jobTitle: [''],
    organization: [''],
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

  saveContactInfo() {
    this.route.params.subscribe((params) => {
      const username = params['username'];
      this.profileService
        .editProfile(username, this.contactInfoForm.value)
        .subscribe((response) => {
          console.log(response);
          if (response.success) {
            this.profileData = response.client;
          } else {
            console.log(response);
          }
        });
    });
  }
}
