import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { OnboardModule } from './onboard/onboard.module';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./onboard/onboard.module').then((m) => m.OnboardModule),
  },
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    OnboardModule,
    NavigationModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
