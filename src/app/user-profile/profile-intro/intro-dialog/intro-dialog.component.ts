import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'intro-dialog',
  templateUrl: './intro-dialog.component.html',
  styleUrls: ['./intro-dialog.component.scss'],
})
export class IntroDialogComponent implements OnInit {
  checked: boolean = true;

  constructor(private fb: FormBuilder) {}

  profileIntroForm = this.fb.group({
    username: [''],
    location: [''],
    website: [''],
  });

  ngOnInit() {}

  saveProfileIntro() {}
}
