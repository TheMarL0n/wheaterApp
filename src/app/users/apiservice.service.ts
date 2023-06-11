import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  //get the username
  getToken() {
    return localStorage.getItem('username');
  }

  //get the city 
  getCity() {
    return localStorage.getItem('city');
  }



  /*NO HEADER NEEDED IN THIS CASE
  headers = new HttpHeaders({
    'X-Meteum-API-Key': ''
  });*/

  //get the current and forecast weather from api
  getCurrentWeather(): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/onecall?' + localStorage.getItem('city') + '&exclude=hourly,minutely,alert&units=metric&appid=d2eaf012f8a1391983a1a218585ad3ee');
  }

  
  //get the city from api
  getWeatherCity(): Observable<any> {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?' + localStorage.getItem('city') + '&appid=d2eaf012f8a1391983a1a218585ad3ee');
  }
}