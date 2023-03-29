import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{

  reactiveForm:FormGroup;
  employee:any[]=[];

  constructor(private _location: Location,private http:HttpClient,private route:Router,private apiService:ApiService) 
  {}

  //Add from group and form controls
  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      q1:new FormControl(null,[Validators.required]),
      q2:new FormControl(null,[Validators.required]),
      q3:new FormControl(null,[Validators.required]),
      q4:new FormControl(null,[Validators.required]),
      q5:new FormControl(null,[Validators.required]),
      exam:new FormControl('cae',Validators.required)
    })
  }

  onSubmit()
  {
     if(!this.reactiveForm.valid)
     {
       alert("Fill details correctly");
     }
   else
   {
    //post data api

    // console.log(this.reactiveForm.value);
    this.apiService.PostQuestion(this.reactiveForm.value).subscribe((res)=>{
        // console.log(res);
        alert("Question Bank added Successfully!");
        this.reactiveForm.reset();
        this.route.navigate(['questions']);
      },err=>{
        alert("Question Bank Added Successfully!");
      this.route.navigate(['questions'])
      //console.log(err);
   });
      // console.log(this.reactiveForm);
    }
  }

  //naigate back function
  backClicked()
  {
    this._location.back();
  }


}
