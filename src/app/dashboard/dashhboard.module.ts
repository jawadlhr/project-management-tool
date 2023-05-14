import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  declarations: [DashboardComponent],
  providers: [],
  exports: [DashboardComponent],
})
export class DashboardModule {}
