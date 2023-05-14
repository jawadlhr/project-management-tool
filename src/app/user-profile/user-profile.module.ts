import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UserProfileComponent } from './user-profile.component';

import { ProfileIntroComponent } from './profile-intro/profile-intro.component';
import { IntroDialogComponent } from './profile-intro/intro-dialog/intro-dialog.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { InfoTabComponent } from './profile-data/info-tab/info-tab.component';
import { BasicInfoComponent } from './profile-data/info-tab/basic-info/basic-info.component';
import { ContactInfoComponent } from './profile-data/info-tab/contact-info/contact-info.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,    
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    UserProfileComponent, ProfileIntroComponent, IntroDialogComponent, ProfileDataComponent, InfoTabComponent, BasicInfoComponent, ContactInfoComponent
  ],
  providers: [],
  exports: [UserProfileComponent]
})
export class UserProfileModule {}
