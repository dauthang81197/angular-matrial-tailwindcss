import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  breadCrumb: { label: string, value: string }[] = []
  @Input() title: string = 'test';

  @Input() set setBreadCrumb(value: { label: string, value: string }[]) {
    this.breadCrumb = value
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
