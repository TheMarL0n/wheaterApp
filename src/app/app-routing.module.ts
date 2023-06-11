import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { WeatherComponent } from './users/weather/weather.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: "full"},
  {path:'login', component:LoginComponent},
  {path:'weather', component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
