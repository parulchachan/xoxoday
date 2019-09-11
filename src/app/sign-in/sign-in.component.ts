import { AuthService } from './../authFolder/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('parul.chachan',[Validators.required]),
    password: new FormControl('123',[Validators.required]),
  });
  constructor(private router : Router, private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.form.valid){
      this.authService.getid(this.form.get('email').value,this.form.get('password').value).subscribe(user=>{
        if(user.length){
          this.router.navigate(['/domain']);
          console.log(user);
        }
        else
        alert('Either Username or Password invalid')
      })

    }
  }

}
