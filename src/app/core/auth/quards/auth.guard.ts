import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad, Route, Router,
  RouterStateSnapshot, UrlSegment,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, switchMap, of } from 'rxjs';
import { AuthService } from '@app/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private _authService: AuthService, private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const redirectUrl = state.url === '/sign-in' ? '/' : state.url;
    return this._check(redirectUrl);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const redirectUrl = state.url === '/sign-in' ? '/' : state.url;
    return this._check(redirectUrl);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._check('/');
  }

  private _check(redirectURL: string): Observable<boolean> {
    // Check the authentication status
    return this._authService.check()
      .pipe(
        switchMap((authenticated) => {
          // If the user is not authenticated...
          if (!authenticated) {
            // Redirect to the sign-in page
            void this._router.navigate(['sign-in'], {queryParams: {redirectURL}});

            // Prevent the access
            return of(false);
          }

          // Allow the access
          return of(true);
        })
      );
  }

}
