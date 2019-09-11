import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RegistrationDetails } from '../models/RegistrationDetails';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router : Router,private authservice: AuthService) { }


  signupform = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl(''),
    domain: new FormControl(''),
    teamIds: new FormControl(''),
  });

  onSubmit(){
    if(this.signupform.valid){
      this.authservice.addEmailId(this.signupform.value as RegistrationDetails).subscribe(data => {
        console.log(data)
      });
      this.authservice.getResitrationDetail().subscribe(data => {
        console.log(data)
      });

      this.router.navigate(['/auth/verification'])
      // this.authservice.getfirstname('parul').subscribe(data=>console.log(data))
    }
  }

}
