import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
  clientsData$: any;
  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsData$ = this.clientsService.getClients();
    // console.log(this.clientsData$);
  }
}
