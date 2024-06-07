import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const basicUrl=["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }

  postOrder(order:any):Observable<any>{
    return this.http.post(basicUrl+'/saveOrder',order);
  }
  dowloadReport(orderDto:any):Observable<Blob>{
    
    // return this.http.get(basicUrl+`/dowloadReport`,{
    //   responseType: 'blob' // Set the response type to blob
    // });
    return this.http.post(basicUrl + `/dowloadReport`,orderDto,  {
      responseType: 'blob' // Set the response type to blob
    });
  } 
  dowloadbill(orderDto:any): Observable<Blob> {
    return this.http.post(basicUrl + `/dowloadBill`,orderDto,  {
      responseType: 'blob' // Set the response type to blob
    });
  }
 

}
