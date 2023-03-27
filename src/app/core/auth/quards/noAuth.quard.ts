import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad, Route, Router,
  RouterStateSnapshot, UrlSegment,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '@app/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private _router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._check();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._check();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._check();
  }

  private _check(): Observable<boolean>
  {
    // Check the authentication status
    return this.authService.check()
      .pipe(
        switchMap((authenticated) => {
          // If the user is authenticated...
          if ( authenticated )
          {
            // Redirect to the root
            void this._router.navigate(['']);

            // Prevent the access
            return of(false);
          }

          // Allow the access
          return of(true);
        })
      );
  }

}
