import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBOmcEsyy_coy01BWS2d8oXexrhw4vOHJk', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
    console.log(this.apiLoaded)
  }

  ngOnInit(): void {
  }

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;



}
