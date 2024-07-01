import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserEmailInfo } from '../models/UserEmailInfo';
@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private userEmailInfo = new BehaviorSubject<UserEmailInfo>({email:'',given_name:'',name:'',picture:''});
  currentUserEmailInfo = this.userEmailInfo.asObservable();

  private registeredCourseNames  =new BehaviorSubject<string[]>([]);
  currentRegisteredCourseNames = this.registeredCourseNames.asObservable();
  constructor() { }

  setUserEmailInfo(message: UserEmailInfo) {
    this.userEmailInfo.next(message);
  }
  setRegisteredCourseNames(message:string[]){
    this.registeredCourseNames.next(message);
  }
}
