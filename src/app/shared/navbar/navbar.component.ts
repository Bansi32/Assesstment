import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router){}
  loggedInUser:boolean;
  ngOnInit(){
    this.loggedInUser= this.authService.loggedIn;
  }

  logout(){
    this.authService.loggedIn=false;
    this.router.navigate(['']);
    this.loggedInUser=false;
  }

}
