import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.form.valid && (this.form.get('pass1').value == this.form.get('pass2').value)){
      this.router.navigate(['/auth/companyDetail'])
    }
  }



}
