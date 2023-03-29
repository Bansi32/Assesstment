import { NgModule } from '@angular/core';
import { RouterModule, Routes ,ExtraOptions } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { GuardService } from './services/guard.service';
import { FormComponent } from './form/form.component';
import { CategoriesComponent } from './categories/categories.component';
import { CaeComponent } from './cae/cae.component';
import { EseComponent } from './ese/ese.component';

//routes
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'questions',component:CategoriesComponent ,canActivate:[GuardService]},
  {path:'questions' ,children:[
  {path:'add',canActivateChild:[GuardService],component:FormComponent,},
    {path:'cae',component:CaeComponent,},
    {path:'ese',component:EseComponent}
  ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
