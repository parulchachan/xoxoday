import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent  {

  form = new FormGroup({
    otp1: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    otp2: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    otp3: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    otp4: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    otp5: new FormControl('',[Validators.required,Validators.maxLength(1)]),
    otp6: new FormControl('',[Validators.required,Validators.maxLength(1)]),
  });
  constructor(private router : Router) { }

  onSubmit(){
    if(this.form.valid){
      this.router.navigate(['/auth/setPassword'])
    }
  }

}
