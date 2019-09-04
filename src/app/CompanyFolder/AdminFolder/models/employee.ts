export class Employee{
    firstname: string;
    lastname:  string;
    email: string;
    userAccessLevel: string;
    employeeId:string;
    department: string;
    departmentHead: string;
    designation: string;
    grades:string;
    hr: string;
    manager: string;
    joinDate: string;
    sites: string;
    birthMonth: number;
    birthDate: number;
    address: {
      addressLine1: string;
      addressLine2: string;
      city: string;
      state: string;
      pincode: number;
      country: string;
      contactnumber:number;
    }
}