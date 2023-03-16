import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  breadcrumbs: { label: string, value: string }[] = [];
  @Input() set setBreadCrumbs(value: { label: string; value: string }[]) {
    console.log(value)
    this.breadcrumbs = value
}

  constructor() {
  }

  ngOnInit(): void {
  }

}
