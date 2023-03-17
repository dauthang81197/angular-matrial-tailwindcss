import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MapDirectionsService } from '@angular/google-maps';

export interface MapDirectionsResponse {
  status: google.maps.DirectionsStatus;
  result?: google.maps.DirectionsResult;
}
@Component({
  selector: 'app-google-map-custom',
  templateUrl: './google-map-custom.component.html',
  styleUrls: ['./google-map-custom.component.scss']
})
export class GoogleMapCustomComponent implements OnInit {
  @Input() height: string = '400px';
  @Input() width: string = '750px';
  @Input() zoom: number = 4;
  @Input()  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};

  polylineOptions: google.maps.PolylineOptions = {};

  heatmapOptions = {radius: 5};
  heatmapData = [
    {lat: 37.782, lng: -122.447},
    {lat: 37.782, lng: -122.445},
    {lat: 37.782, lng: -122.443},
    {lat: 37.782, lng: -122.441},
    {lat: 37.782, lng: -122.439},
    {lat: 37.782, lng: -122.437},
    {lat: 37.782, lng: -122.435},
    {lat: 37.785, lng: -122.447},
    {lat: 37.785, lng: -122.445},
    {lat: 37.785, lng: -122.443},
    {lat: 37.785, lng: -122.441},
    {lat: 37.785, lng: -122.439},
    {lat: 37.785, lng: -122.437},
    {lat: 37.785, lng: -122.435}
  ];

  markerPositions: google.maps.LatLngLiteral[] = [    {lat: 37.782, lng: -122.447},
    {lat: 37.782, lng: -122.445},
    {lat: 37.782, lng: -122.443},
    {lat: 37.782, lng: -122.441},
    {lat: 37.782, lng: -122.439},
    {lat: 37.782, lng: -122.437},
    {lat: 37.782, lng: -122.435},
    {lat: 37.785, lng: -122.447},
    {lat: 37.785, lng: -122.445},
    {lat: 37.785, lng: -122.443},
    {lat: 37.785, lng: -122.441},
    {lat: 37.785, lng: -122.439},
    {lat: 37.785, lng: -122.437},
    {lat: 37.785, lng: -122.435}];

  vertices: google.maps.LatLngLiteral[] = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  markerOptions: google.maps.MarkerOptions = {draggable: false};

  bounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };

  circleCenter: google.maps.LatLngLiteral = {lat: 10, lng: 15};
  radius = 3;

  imageUrl = '';
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };

  kmlUrl = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
  // readonly directionsResults$: Observable<google.maps.DirectionsResult|undefined>;
  // readonly directionsResults1$: Observable<google.maps.DirectionsResult|undefined>;
  constructor(mapDirectionsService: MapDirectionsService) {
    // const request: google.maps.DirectionsRequest = {
    //   destination: {lat: 21.037280, lng: 105.780422},
    //   origin: {lat: 21.023412, lng: 105.841893},
    //   travelMode: google.maps.TravelMode.TRANSIT
    // };
    //
    // this.directionsResults$ = mapDirectionsService.route(request).pipe(map(response => response.result));
    //
    //
    // const request1: google.maps.DirectionsRequest = {
    //   destination: {lat: 21.0138475452289, lng: 105.80202462958967},
    //   origin: {lat: 21.023412, lng: 105.841893},
    //   travelMode: google.maps.TravelMode.TRANSIT
    // };
    //
    // this.directionsResults1$ = mapDirectionsService.route(request1).pipe(map(response => response.result));
    let path = [{lat: 37.772,lng: -122.214},
      {lat: 21.291,lng: -157.821},
      {lat: -18.142,lng: 178.431},
      {lat: -27.467,lng: 153.027}
    ];
    // @ts-ignore
    // let map = new google.maps.Map(document.getElementById('map'), {
    //   zoom: 3,
    //   center: {
    //     lat: 0,
    //     lng: -180
    //   },
    //   mapTypeId: 'terrain'
    // });
    // let lineSymbol = new google.maps.Marker({
    //   icon: {
    //     anchor: new google.maps.Point(16, 16), // center icon on end of polyline
    //     origin: new google.maps.Point(0, 0),
    //     scaledSize: new google.maps.Size(32, 32),
    //     size: new google.maps.Size(64, 64),
    //     url: "app/src/assets/images/flight.jpg",
    //     path: "45deg"
    //   },
    //   position: path[path.length - 1],
    //   map: map
    // });
    // this.polylineOptions = {
    //   icons: [{
    //     // icon: lineSymbol,
    //     offset: '100%'
    //   }],
    //   path: this.vertices
    // }
  }

  ngOnInit(): void {
  }

  moveMap(event: google.maps.MapMouseEvent) {
    // @ts-ignore
    this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    // @ts-ignore
    this.display = event.latLng.toJSON();
  }



}
