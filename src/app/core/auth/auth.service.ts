import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, throwError } from 'rxjs';
import { Login, ThangdtApiService } from '@app/thangdt-api/thangdt-api.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authenticated: boolean = false;
    constructor(http: HttpClient, private _thangdtApiService: ThangdtApiService, private _sessionStorageService: SessionStorageService) {

    }

  get accessToken(): string {
    return this._sessionStorageService.getData('accessToken') ?? '';
  }

  set accessToken(token: string) {
    this._sessionStorageService.saveData('accessToken', token);
  }

  signIn(request: { email: string, password: string }): Observable<any> {
    // Throw error, if the user is already logged in
    if (this._authenticated) {
      return throwError('User is already logged in.');
    }

    return this._thangdtApiService
      .singIn(request)
      .pipe(
        switchMap((response: Login) => {
          // Store the access token in the local storage
          this.accessToken = response.accessToken;

          // Set the authenticated flag to true
          this._authenticated = true;

          // Store the user on the user service
          //this._userService.user = response.user;
          // Return a new observable with the response
          return of(response);
        })
      );
  }

  check(): Observable<boolean> {
    // Check if the user is logged in
    if(this._authenticated) {
      return of(true);
    }

    // Check the access token availability
    if(this.accessToken) {
      return of(true);
    }

    // Check the access token expire date
    return of(false);
  }

  signOut(): Observable<any> {
    // Remove the access token from the local storage
    this._sessionStorageService.removeData('accessToken');

    // Set the authenticated flag to false
    this._authenticated = false;

    // Return the observable
    return of(true);
  }


}
