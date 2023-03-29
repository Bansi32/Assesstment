import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ese',
  templateUrl: './ese.component.html',
  styleUrls: ['./ese.component.css']
})
export class EseComponent {
  ese:any[]=[];

  constructor(private api:ApiService,private http:HttpClient){}
  
  //fetching ese exmination data
  ngOnInit(){
      this.api.GetEseQuestions().subscribe((res:any)=>{
        this.ese=res;
      });
  }
}
