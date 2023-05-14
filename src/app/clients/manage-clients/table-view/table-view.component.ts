import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../clients.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableViewComponent implements OnInit {
  dataSource: any;
  username: any;

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.clientsService.getClients().subscribe((response: any) => {
      this.dataSource = response;
    });

    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this.clientsService.findOne(this.username).subscribe();
    });
  }
  columnsToDisplay: string[] = [
    'name',
    'username',
    'organization',
    'location',
    'registerDate',
    'active',
  ];
  expandedElement: any;

  navigateToProfile(username: any) {
    this.router.navigate([username]);
  }
}
