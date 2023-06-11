import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  apidata: any;
  apidatacurrent: any;

  constructor(public service: ApiserviceService) { }

  title = 'weather-data';

  //get the username from the service "getToken" in apiservice.service.ts
  checktoken = this.service.getToken();

  //get the City from the service "getLocation" in apiservice.service.ts
  checkcity = this.service.getCity();

  //get the API Data from the service "apiservice.service.ts"
  ngOnInit() {
    this.service.getCurrentWeather().subscribe(
      (res) => {
        this.apidatacurrent = res;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      }
    );

    this.service.getWeatherCity().subscribe(
      (data) => {
        this.apidata = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      }
    );
  }

}
