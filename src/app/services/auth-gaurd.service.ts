import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../authFolder/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
  canActivate(route,state: RouterStateSnapshot){
    return this.auth.user$.map(user=>{
      if(user) return true;
      this.router.navigate(['/domain']);
      return false;
   }); 
  }
  constructor(private auth:AuthService,private router:Router) {

   }
}
