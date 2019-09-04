import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms'
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  
  form= new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    userAccessLevel: new FormControl('',Validators.required),
    employeeId: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    departmentHead: new FormControl('',Validators.required),
    designation: new FormControl('',Validators.required),
    grades: new FormControl('',Validators.required),
    hr: new FormControl('',Validators.required),
    manager: new FormControl('',Validators.required),
    joinDate: new FormControl('',Validators.required),
    sites: new FormControl('',Validators.required),
    birthMonth: new FormControl('',Validators.required),
    birthDate: new FormControl('',Validators.required),
    address: new FormGroup({
      addressLine1: new FormControl('',Validators.required),
      addressLine2: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      pincode: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      contactnumber: new FormControl('',Validators.required),
    })
  })

  constructor(
    private employeeservive: EmployeeService,
    private router : Router,) 
    {
  }

  submit(){
    console.log(this.form.value);
    this.employeeservive.addEmployee(this.form.value);
    this.employeeservive.printEmplyee();
    this.router.navigate(['/admin/userManagement'])
  }


}
