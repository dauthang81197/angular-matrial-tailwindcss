import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

export interface SideBar {
  name?: string;
  link?: string;
  icon?: string;
  isOpen?: boolean;
  level?: number

  children?: SideBar[]
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() changeTitleHeader= new EventEmitter<string>();
  sideBar: SideBar[];

  constructor(private _router: Router) {
    this.sideBar = [
      {
        name: 'Dashboard',
        link: 'dashboard',
        icon: 'cached',
        level: 1,
        isOpen: false
      },
      {
        name: 'Component',
        icon: 'apps',
        isOpen: false,
        level: 1,
        children: [
          {
            name: 'Google maps',
            link: 'components/google-maps',
            icon: 'map',
            isOpen: false,
          },
          {
            name: 'Child 2',
            link: 'child2',
            icon: 'cached',
            isOpen: false,
          }
        ],
      },
      {
        name: 'Games',
        icon: 'sports_esports',
        level: 1,
        isOpen: false,
        children: [
          {
            name: 'Poker',
            link: 'games/poker',
            icon: 'monetization_on',
            isOpen: false,
          },
        ],
      },
    ]
  }

  ngOnInit(): void {
  }

  openOrCloseSideBarChildren(name: string | undefined, isOpen: boolean, link?: string): void {
    if (link) {
      this.changeTitleHeader.emit(name);
      void this._router.navigate([link])
      return;
    }
    this.sideBar = this.sideBar.map(item => {
      if (item?.name === name && item?.children && item?.children?.length > 0) {
        return {
          ...item,
          isOpen
        }
      }
      return item;
    })

  }
}
