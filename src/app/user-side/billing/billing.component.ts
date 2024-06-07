import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { subscribe } from 'diagnostics_channel';
import { OrderServiceService } from '../../service/order-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent implements OnInit{
  product:any;
  id:number=0;
  
  Gtotel:number=0;
  products!:any[];
  postForm!:FormGroup
  imageUrl!: string;

  constructor(private service:ProductService,
    private orderService:OrderServiceService,
    private fb:FormBuilder,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}

ngOnInit(): void {
 
  this.showCart();
  this.grandTotel();
  this.postForm=this.fb.group({
    customerName:[null,[Validators.required]],
    mobile:[null,[Validators.required]],
    place:[null,[Validators.required]]
  })
    
}
getid(){
  this.service.datas$.subscribe(data=>{
    this.id=data;
  })
}
getByProduct(){
  this.service.getById(this.id).subscribe((res)=>{
   this.product=res;
   console.log(this.id);
   
  

  })
}
getImageUrl(image: string): string {
  
  return `/assets/productImages/${image}`; 
 
}
// getImageUrl(image: string | null | undefined): string {
//   return image ? `/assets/productImages/${image}` : '/assets/productImages/default.jpg';
// }
showCart(){
  this.service.showCart().subscribe((res)=>{
    this.products=res;
    
    

  })
}
incriment(id:number)
{
  this.service.incrimentQuantity(id).subscribe((res)=>{
    window.location.reload();
  })
}
decriment(id:number){
 this.service.decrimentQuantity(id).subscribe((res)=>{
  window.location.reload();
 })
}
removeItem(id:number){

this.service.removeFromCart(id).subscribe((res)=>{
  window.location.reload();
})
}
grandTotel(){
  this.service.cartTotel().subscribe((res)=>{
    console.log(res)
    this.Gtotel=res;
  })
}
// orderSave(){
 
//   this.orderService.dowloadbill(this.postForm.value).subscribe((blob) => {
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'bill.pdf'; // Specify the filename
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);
//   }, (error) => {
//     console.error('Download failed', error);
//   });
//   this.orderService.postOrder(this.postForm.value).subscribe((res)=>{
//     console.log(res)
  
//     window.location.reload();
//   })

// }
orderSave() {
  this.orderService.dowloadbill(this.postForm.value).subscribe((blob) => {
    const url = window.URL.createObjectURL(blob);
    const newWindow = window.open(url);

    // Use optional chaining operator (?.) to safely access properties/methods
    if (newWindow) {
      newWindow.onload = () => {
        newWindow.print();
        newWindow.onafterprint = () => {
          newWindow.close();
          window.URL.revokeObjectURL(url);
        };
      };
    } else {
      console.error('Failed to open new window.');
    }
  }, (error) => {
    console.error('Download failed', error);
  });
  this.orderService.postOrder(this.postForm.value).subscribe((res)=>{
        console.log(res)
      
        window.location.reload();
      })
}



deleteAll(){
  this.service.deleteAllFromCart().subscribe((res)=>{
    window.location.reload();
  })
}
}
