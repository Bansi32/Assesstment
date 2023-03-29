import { Component ,OnInit} from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  loggedInUser:boolean;
  user:string;

  constructor(private authService:AuthService){}
  //check auth 
  ngOnInit(){
      this.loggedInUser=this.authService.loggedIn;
      this.user=this.authService.userName;
  }

}
