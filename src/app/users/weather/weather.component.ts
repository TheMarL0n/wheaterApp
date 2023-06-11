import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {

  constructor(public service: ApiserviceService, private router: Router) { }

  title = 'weather-data';

  apidata: any;
  apidatacurrent: any;
  apipollution: any;

  errmsg: any;
  errmsgshow = false;

  //Handle form and validate required fields
  cityForm = new FormGroup({
    city: new FormControl('', Validators.required)
  });

  //function for submiting form
  citySubmit() {
    //if submited fields are valid
    if ((this.cityForm.valid) && (this.cityForm.value.city)) {

      //store de data in localStorage
      localStorage.setItem('city', this.cityForm.value.city);

      //relaod weather page
      window.location.reload();

    } else {
      this.errmsgshow = true;
      this.errmsg = "Most select an option";
    }
  }

  //get the username from the service "getToken" in apiservice.service.ts
  checktoken = this.service.getToken();

  //get the City from the service "getLocation" in apiservice.service.ts
  checkcity = this.service.getCity();

  ngOnInit() {

    //check if is not logged in
    if (!this.checktoken) {
      this.router.navigate(['login']);
    }

    //get the API Data from the service "apiservice.service.ts"
    this.service.getCurrentWeather().subscribe({
      next: res => this.apidatacurrent = res,
      error: error => console.log(error)
    });

    this.service.getAirPollution().subscribe({
      next: response => this.apipollution = response,
      //next:data=>console.log(data),
      error: error => console.log(error)
    });

    this.service.getWeatherCity().subscribe({
      next: data => this.apidata = data,
      error: error => console.log(error)
    });

  }

}
