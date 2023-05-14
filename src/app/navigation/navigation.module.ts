import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';

import { NavigationComponent } from './navigation.component';

import { ToolBarComponent } from './toolbar/toolbar.component';
import { NotificationsComponent } from './toolbar/notifications/notifications.component';
import { AccountMenuComponent } from './toolbar/account-menu/account-menu.component';
import { DashboardModule } from '../dashboard/dashhboard.module';
import { SideNavComponent } from './sidenav/sidenav.component';
import { SideNavMenuComponent } from './sidenav/sidenav-menu/sidenav-menu.component';
import { UserProfileModule } from '../user-profile/user-profile.module';
import { ClientsModule } from '../clients/clients.module';

import { AuthGuard } from '../onboard/auth/auth.guard';
import { TokenInterceptorService } from '../onboard/auth/token-interceptor.service';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/dashhboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashhboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('../clients/clients.module').then((m) => m.ClientsModule),
      },
      {
        path: ':username',
        loadChildren: () =>
          import('../user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    DashboardModule,
    UserProfileModule,
    ClientsModule,
  ],
  declarations: [
    NavigationComponent,
    ToolBarComponent,
    NotificationsComponent,
    AccountMenuComponent,
    SideNavComponent,
    SideNavMenuComponent,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
