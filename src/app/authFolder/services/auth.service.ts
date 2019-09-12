import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationDetails } from '../models/RegistrationDetails';
import { tap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$;
  private authDetailUrl = 'api/registrationDetails';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}


  getResitrationDetail () {
    return this.http.get<RegistrationDetails[]>(this.authDetailUrl)
  }

  addEmailId(data:RegistrationDetails){
    return this.http.post(this.authDetailUrl, data, this.httpOptions);
  }

  updatePassword(id,data){
   return this.http.put(`${this.authDetailUrl}/?id=${id}&:password?`, data);
  }

  getUser(id){
    return this.http.get<RegistrationDetails[]>('api/registrationDetails/?id='+id);
  }

  getid(email){
    return  this.http.get<RegistrationDetails[]>(`${this.authDetailUrl}/?email=${email}`);
  }

  login(email,password){
    return this.http.get<RegistrationDetails[]>(`${this.authDetailUrl}/?email=${email}&password=${password}`).pipe(
      map(response=>{
       console.log('inside login response', response);
       if(response && response.length){
         localStorage.setItem('token',response[0].id.toString());
         return true;
       }
       return false;
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    let id=+localStorage.getItem('token');
    if(id){
      return true;
    }
    else return false;
  }



}
