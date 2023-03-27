import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
import { Router } from '@angular/router';

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

  constructor(private _authService: AuthService, private _router: Router,) {

  }

  ngOnInit(): void {
  }

  logout(): void {
    this._authService.signOut().subscribe(() => {});
    void this._router.navigate(['sign-in']);
  }

}
