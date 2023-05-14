import { Component } from '@angular/core';

@Component({
  selector: 'manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.scss'],
})
export class ManageClientsComponent {
  view: number = 1;
  changeView(mode: number): void {
    this.view = mode;
  }
}
