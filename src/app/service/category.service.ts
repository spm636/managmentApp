import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const basicUrl=["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  sendData(data: number) {
    this.dataSubject.next(data);
  }

  constructor(private http:HttpClient) { }
  showCategory():Observable<any>{
    return this.http.get(basicUrl+`/showCategory`)

  }
  postCategory(category:any):Observable<any>{
    return this.http.post(basicUrl+`/saveCategory`,category);
  }
  updateCategory(id:number,category:any):Observable<any>{
    return this.http.put(basicUrl+`/updateCategory/`+id,category);
  }
  getCategoryById(id:number):Observable<any>{
    return this.http.get(basicUrl+'/findById/'+id);
  }
  deleteCategory(id:number):Observable<any>{
    return this.http.get(basicUrl+`/deleteCategory/`+id);
  }
}
