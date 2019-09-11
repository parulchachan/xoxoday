import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  form = new FormGroup({
    domainName: new FormControl('',[Validators.required]),
  });
  
  constructor(private router : Router) { }

  onSubmit(){
    if(this.form.valid){
      this.router.navigate(['/auth/teamOnBoard'])
    }
  }


  ngOnInit() {
  }

}
