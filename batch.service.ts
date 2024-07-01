import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { 

  }
  getUpcomingBatches(){
    let response:any;
    let url = "/app/batch/get/upcoming/batches";
    response = this.http.get<any>(url);
    return response;
  }
  putAddStudentToBatches(batchId: string, userId: string){
    let response:any;
    let url = "/app/batch/addUser/" +  batchId + "/" + userId;
    console.log("url" , url);
    response = this.http.put<any>(url,{});
    return response;

  }
}
