import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) { }
  errmsg: any;
  errmsgshow = false;
  //Handle form and validate required fields
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required)
  });

  //function for submiting form
  loginSubmit() {
    //if submited fields are valid
    if (this.loginForm.valid) {
      if ((this.loginForm.value.username) && (this.loginForm.value.city)) {
        //clear error
        this.errmsgshow = false;

        //store de data in localStorage
        localStorage.clear();
        localStorage.setItem('username', this.loginForm.value.username);
        localStorage.setItem('city', this.loginForm.value.city);

        //go to weather page
        this.router.navigate(['weather']);
      }
    } else {
      this.errmsgshow = true;
      this.errmsg = "All fields are required";
    }
  }
}
