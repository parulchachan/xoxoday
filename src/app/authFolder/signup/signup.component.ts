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

  invalidSignup=false;
  signupform = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('',[Validators.required])
  });

  onSubmit(){
    if(this.signupform.valid){
      this.authservice.getid(this.signupform.get('email').value).subscribe(data=>{
        if(data.length){
          this.invalidSignup=true;
        }else{
          this.authservice.addEmailId(this.signupform.value as RegistrationDetails).subscribe(data => {
            console.log(data)
          });
          localStorage.setItem('email',this.signupform.get('email').value);
          this.router.navigate(['/auth/verification'])
        }
      })
    }
  }

}
