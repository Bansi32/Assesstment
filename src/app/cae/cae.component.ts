import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cae',
  templateUrl: './cae.component.html',
  styleUrls: ['./cae.component.css']
})

export class CaeComponent implements OnInit{
  
  cae:any[]=[];

  constructor(private api:ApiService,private http:HttpClient){}
  
  //fetching CAE Questions data
  ngOnInit(){
      this.api.GetCaeQuestions().subscribe((res:any)=>{
        this.cae=res;
      });
  }

}
