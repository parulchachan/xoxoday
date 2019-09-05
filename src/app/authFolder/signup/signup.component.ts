import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router : Router) { }


  signupform = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.email]),
  });

  onSubmit(){
    if(this.signupform.valid){
      console.log("12")
      this.router.navigate(['/auth/verification'])
    }
    console.log("1234")

  }

}
