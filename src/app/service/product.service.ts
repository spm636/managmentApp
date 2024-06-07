import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const basicUrl=["http://localhost:8080"]
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  private dataId=new BehaviorSubject<any>(null);
  datas$=this.dataId.asObservable();

 

  sendData(data: number) {
    this.dataSubject.next(data);
  }
  sendId(data: number) {
    this.dataId.next(data);
  }

  constructor(private http:HttpClient) { }

  postProduct(product:any):Observable<any>{
    return this.http.post(basicUrl+`/saveProduct`,product)
  }
  showProduct():Observable<any>{
    return this.http.get(basicUrl+`/showProduct`);
  }
  deleteProduct(id:number):Observable<any>{
    return this.http.get(basicUrl+'/deleteProduct/'+id);
  }
  getById(id:number):Observable<any>{
    return this.http.get(basicUrl+`/productbyId/`+id)
  }
  updateProduct(id:number,product:any):Observable<any>{
    return this.http.put(basicUrl+`/updateProduct/`+id,product);

  }
  addToCart(productId:number):Observable<any>{
    return this.http.post(basicUrl+`/addToCart/`+productId,null);
  }
 showCart():Observable<any>{
  return this.http.get(basicUrl+`/showCart`);
 }
 incrimentQuantity(id:number):Observable<any>{
  return this.http.put(basicUrl+`/incrimentQuantity/`+id,null);
 }
 decrimentQuantity(id:number):Observable<any>{
  return this.http.put(basicUrl+`/decrimentQuantity/`+id,null);
 }
 removeFromCart(id:number):Observable<any>{
  return this.http.put(basicUrl+`/removeFromCrt/`+id,null);
 }
 cartTotel():Observable<any>{
  return this.http.get(basicUrl+`/cartTotel`);
 }
 deleteAllFromCart():Observable<any>{
  return this.http.get(basicUrl+`/deleteCart`);
 }
 prdoucyByCategory(id:number|null):Observable<any>{
  return this.http.get(basicUrl+`/findProductByCategory/`+id);
 }
  
}
