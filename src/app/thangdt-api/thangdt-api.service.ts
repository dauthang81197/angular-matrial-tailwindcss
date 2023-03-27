import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponseBase } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable, map, catchError } from 'rxjs';
export const THANGDT_API_URL = new InjectionToken<string>('THANGDT_API_URL');

export interface Login {
  accessToken: string
  admin: User
}

export interface User {
  id: string,
  firstName: string;
  lastName: string;
  email: string;
  roles: string[]
}
@Injectable({
  providedIn: 'root'
})
export class ThangdtApiService {
  private http: HttpClient;
  private baseUrl: string;
  constructor(@Inject(HttpClient) http: HttpClient, @Inject(THANGDT_API_URL) baseUrl?: string, ) {
    this.http = http;
    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:3000/";
  }

  singIn(request: { email: string, password: string }): Observable<Login> {
    let url_ = this.baseUrl + 'admin/auth/token';

    // let options_ : any = {
    //   body: request,
    //   observe: "response",
    //   responseType: "blob",
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   })
    // };

    return this.http.post(url_, request).pipe(
      map((response) => {
        return response as Login;
      }),
      catchError((error: HttpErrorResponse) => {
        // this.toastHelper.toastError(error);
        return throwError(error);
      })
    );

  }
}
