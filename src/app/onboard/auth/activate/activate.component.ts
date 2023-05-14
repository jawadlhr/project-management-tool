import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'activate-account',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  body: any;
  spinner = true; // Spinner Button Show/Hide on Form Submission
  responseMessage: any;
  activated = false;
  notActivated = false;

  constructor(private auth: AuthService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const token = params['token'];
      this.auth.activate(token, this.body).subscribe((response) => {
        // console.log(response);
        if (response.success) {
          this.spinner = false;
          this.responseMessage = response;
          this.activated = true;
        } else {
          this.spinner = false;
          this.responseMessage = response;
          this.notActivated = true;
        }
      });
    });
  }
}
