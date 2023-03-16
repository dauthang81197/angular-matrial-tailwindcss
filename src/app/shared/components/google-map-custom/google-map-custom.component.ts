import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

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
