import { Component, OnInit, ViewChild } from '@angular/core';
// import { google } from 'goo';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})

export class Component1Component implements OnInit {
  // @ViewChild('map') mapElement: any;
  // @ViewChild('map', { static: false }) mapElement: any;
  // latitude = 26.741501;
  // longitude = 83.752098;
  zoom = 15;
  latitude = 26.741501;
  longitude = 83.752098;
  constructor() { }

  ngOnInit() {
    this.setCurrentLocation();
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log('latitude', this.latitude);
        console.log('longitude', this.longitude);
        this.zoom = 15;
      });
    }
  }

  // map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: -34.397, lng: 150.644},
  //   zoom: 8
  // });

}
