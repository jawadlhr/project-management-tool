import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'portal-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientsData: any;
  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit() {
    this.clientsService.getClients().subscribe((response) => {
      if (response.success === false) {
        this.router.navigate(['/login']);
        console.log(response);
      } else {
        this.clientsData = response;
      }
    });
  }
}
