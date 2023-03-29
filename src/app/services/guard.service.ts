import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot,CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class GuardService implements CanActivate{

  constructor(private authService:AuthService,private router:Router) {
   }

   //to guard the parent child returns true is user is logged in
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
     if (this.router.url === '/' && !this.authService.loggedIn) {
       this.router.navigate(['']);
      return false;
  }
    return this.authService.loggedIn; 
  }

  //child route guard returns true if admin is loggedIn
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return this.authService.admin; 
  }

}
