import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  employees:Employee[]=[]
  constructor(private employeeservice: EmployeeService) { }

  ngOnInit() {
    this.employees=this.employeeservice.getEmployee();
  }

}
