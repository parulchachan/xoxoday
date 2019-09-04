import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { EMPLOYEE } from '../models/mock-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
  
   }

   addEmployee(employee:Employee){
    EMPLOYEE.push(employee);
   }

   printEmplyee(){
     console.log('mock-data', EMPLOYEE);
   }

   getEmployee(){
     return EMPLOYEE;
   }
}
