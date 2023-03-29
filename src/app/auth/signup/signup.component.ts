import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  reactiveForm:FormGroup;
  signUpUsers:any[]=[];
  disabled:boolean=true;

  constructor(private http:HttpClient,private route:Router){}

  //create form group
  ngOnInit(): void
  {
    this.reactiveForm=new FormGroup({
      userName:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      emailId:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      role:new FormControl(null),

    });
  }
  //validate form and submit
  onSubmit(){
    if(!this.reactiveForm.value.userName || !this.reactiveForm.value.emailId || !this.reactiveForm.value.password)
     {
       alert("Fields required!");
     }
     if(!this.reactiveForm.valid)
     {
       alert("Fill details correctly");
     }
   else
   {
    //validate form and add data to database
    this.reactiveForm.value.role=false;
      this.http.post<any>("http://localhost:8084/signup",this.reactiveForm.value,{'responseType': 'text' as 'json'}).subscribe((res)=>{
        alert("User registerd Successfully!");
        // this.reactiveForm.reset();
        this.route.navigate(['login']);
      },err=>{alert("Something went wrong!");
      //this.route.navigate(['login']);
      console.log(err);
    });
      // console.log(this.reactiveForm);

    }
  }

}
