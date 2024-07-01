import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  
  constructor(private http: HttpClient) { 

  }
  getUser(email:string){
    let response:any;
    let url = "/app/user/" + email;
    response = this.http.get<any>(url);
    return response;
  }
  getUserClasses(email:string){
    let response:any;
    let url = "/app/user/get/classes/" + email;
    response = this.http.get<any>(url);
    return response;
  }
  getUserFutureClasses(email:string){
    let response:any;
    let url = "/app/user/get/next/classes/" + email;
    response = this.http.get<any>(url);
    return response;
  }
 
}
