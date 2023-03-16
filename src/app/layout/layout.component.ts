import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { capitalizeFirstLetter } from '@app/helpers/common.helper';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = "Dashboard";
  breadcrumb: { label: string, value: string }[] = [];
  constructor(private router: Router) {
    // @ts-ignore
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const breadcrumb = event.url.split("/").splice(1, event.url.split("/").length -1);
      console.log(breadcrumb)
      this.breadcrumb = breadcrumb.map((item: string) => {
        return {
          value: item,
          label: capitalizeFirstLetter(item)
        }
      })

      console.log( this.breadcrumb)
    });
  }

  ngOnInit(): void {
  }

  changedTitleHeader(title: string) {
    this.title = title;
  }

}
