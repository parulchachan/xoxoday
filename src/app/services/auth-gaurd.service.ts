import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../authFolder/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGaurdService implements CanActivate {
  constructor(private auth:AuthService,private router:Router) {
  }

  canActivate(route){
    let result= this.auth.isLoggedIn();
      if(result) return true;

      this.router.navigate(['/signin']);
      return false;
  }
}
