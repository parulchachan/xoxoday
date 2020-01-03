import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationDetails } from '../models/RegistrationDetails';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  form = new FormGroup({
    pass1: new FormControl('',[Validators.required]),
    pass2: new FormControl('',[Validators.required]),
  });
  constructor(private router : Router,private auth:AuthService) { }

  ngOnInit() {
    
  }

  onSubmit(){
    if(this.form.valid && (this.form.get('pass1').value == this.form.get('pass2').value)){
      let email=localStorage.getItem('email');
      if(email){
        let id;
        this.auth.getid(email).subscribe(result=>{
          if(result.length){
            id=result[0].id;
            let data:RegistrationDetails;
            data=result[0];
            data.password=this.form.get('pass1').value;
            if(id ){
              this.auth.updatePassword(id,data).subscribe(data=>{
                console.log(data);
                this.router.navigate(['/auth/companyDetail'])
              })
              this.auth.getResitrationDetail().subscribe(response=>{
                console.log(response);
              })
            }
          }else{
            alert('First verify your email id no idin');
            this.router.navigate(['/auth/signup']);
          }
        })
      }else{
        alert('First verify your email id no email');
        this.router.navigate(['/auth/signup']);
      } 
    }
  }



}
