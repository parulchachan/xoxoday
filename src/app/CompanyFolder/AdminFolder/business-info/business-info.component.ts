import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.css']
})
export class BusinessInfoComponent implements OnInit {

  form= new FormGroup({
    companyname: new FormControl('',Validators.required),
    website: new FormControl('',Validators.required),
    taxId: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    pincode: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    contactnumber: new FormControl('',Validators.required)
  })
  
  

  constructor() { }

  ngOnInit() {
  }

}
