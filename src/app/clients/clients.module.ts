import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { MatTableModule } from '@angular/material/table';

import { ClientsComponent } from './clients.component';

import { ManageClientsComponent } from './manage-clients/manage-clients.component';
import { GridViewComponent } from './manage-clients/grid-view/grid-view.component';
import { TableViewComponent } from './manage-clients/table-view/table-view.component';

import { AddClientComponent } from './add-client/add-client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: '',
        component: ManageClientsComponent,
      },
      {
        path: 'add-client',
        component: AddClientComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    MatTableModule,
  ],
  declarations: [
    ClientsComponent,
    ManageClientsComponent,
    GridViewComponent,
    TableViewComponent,
    AddClientComponent,
  ],
  exports: [ClientsComponent],
})
export class ClientsModule {}
