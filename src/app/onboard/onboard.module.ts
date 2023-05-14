import { NgModule } from '@angular/core';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';

import { OnBoardComponent } from './onboard.component';
import { SliderComponent } from './slider/slider.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { ActivateComponent } from './auth/activate/activate.component';
import { LogInComponent } from './auth/login/login.component';
import { ResendComponent } from './auth/resend/resend.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ResetComponent } from './auth/reset/reset.component';

const routes: Routes = [
  {
    path: '',
    component: OnBoardComponent,
    children: [
      {
        path: '',
        component: SignUpComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: 'activate/:token',
        component: ActivateComponent,
      },
      {
        path: 'login',
        component: LogInComponent,
      },
      {
        path: 'resend',
        component: ResendComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotComponent,
      },
      {
        path: 'reset-password/:token',
        component: ResetComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    MatCarouselModule.forRoot(),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  declarations: [
    OnBoardComponent,
    SliderComponent,
    SignUpComponent,
    ActivateComponent,
    LogInComponent,
    ResendComponent,
    ForgotComponent,
    ResetComponent,
  ],
  providers: [],
  exports: [OnBoardComponent],
})
export class OnboardModule {}
