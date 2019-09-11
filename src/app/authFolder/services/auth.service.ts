import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationDetails } from '../models/RegistrationDetails';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$;
  private authDetailUrl = 'api/registrationDetails';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }


  getResitrationDetail () {
    return this.http.get<RegistrationDetails[]>(this.authDetailUrl)
  }

  addEmailId(data:RegistrationDetails){
    console.log(data);
    return this.http.post(this.authDetailUrl, data, this.httpOptions);
  }

  getfirstname(data){
    return this.http.get<RegistrationDetails[]>('api/registrationDetails?firstname='+data);
  }

  getid(email,password){
    return this.http.get<RegistrationDetails[]>(`${this.authDetailUrl}/?email=${email}&password=${password}`);
  }

  // get appUser$(){
  //   return this.user$
  //     .switchMap(user => {
  //       if(user) return this.userService.get(user.uid).valueChanges(); 

  //       return of(null);
  //       })
  // }



}
