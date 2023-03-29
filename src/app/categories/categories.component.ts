import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  role:boolean;
  constructor(private authService:AuthService) { }
  
  
  ngOnInit(){
      this.role=this.authService.admin;
  }

}
