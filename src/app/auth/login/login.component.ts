import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;
  loggedIn: boolean = false;
  userName: string;
  admin: boolean = false;

  constructor(private http: HttpClient, private route: Router, private authService: AuthService) { }

  // Create Form Group
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      emailId: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  //validate form and navigate to questions page
  onSubmit() {
    if (!this.reactiveForm.value.emailId || !this.reactiveForm.value.password) {
      alert("Fields required!");
    }
    if (!this.reactiveForm.valid) {
      alert("Fill details correctly");
    }
    else {
      //checking data 
      this.http.post<any>('http://localhost:8084/login',this.reactiveForm.value).subscribe((res) => {
        // console.log(res);
        const user = res.find((a: any) => {
          if (a.emailId === this.reactiveForm.value.emailId && a.password === this.reactiveForm.value.password) {
            this.userName = a.userName;
            this.admin = a.role;
            this.authService.admin = this.admin;
            this.authService.userName = this.userName;
            // console.log(this.authService.userName);
            return true;
          }
          return false;
        });

        //check is user is valid assign proper auth 
        if (user) {
          this.loggedIn = true;
          this.authService.loggedIn = this.loggedIn;
          this.route.navigate(['questions']);
          alert("User loggedIn Successfully!");
          // this.reactiveForm.reset();
        }
        else {
          alert("User not found!");
        }
      }, err => { alert("Something went wrong!") });
      // console.log(this.reactiveForm);
    }
  }
}
