import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let ga: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'googleAngularAnalytics';
  lat = 26.741501;
  long = 83.752098;
  constructor(public router: Router) {
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');

      }

    });
  }
  // public getWeatherReport(){
  //   var unirest = require("unirest");

  //   var req = unirest("GET", "https://weather2020-weather-v1.p.rapidapi.com/e8ecee8ff60c478f8a36280fea0524fe/39.0997,94.5783");
    
  //   req.headers({
  //     "x-rapidapi-host": "weather2020-weather-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "SIGN-UP-FOR-KEY"
  //   });
    
    
  //   req.end(function (res) {
  //     if (res.error) throw new Error(res.error);
    
  //     console.log(res.body);
  //   }); 
  // }
}
