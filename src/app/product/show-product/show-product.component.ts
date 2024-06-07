import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.scss'
})
export class ShowProductComponent implements OnInit {

  product:any[]=[]
  show:boolean=false;
  editShow:boolean=false;
  images!:string;
  constructor(private service:ProductService,
    private root:Router
  ){}

  ngOnInit(): void {
    this.allProduct();
      
  }
  allProduct(){
    this.service.showProduct().subscribe((res)=>{
      console.log(res);
      
      this.product=res;
     
      
      //this.images=res.imagesUrl[0];
      
      
    })
  }
  addProduct(){
    this.show=true;
    this.editShow=false;
  }
  deleteProducts(id:number){
    this.service.deleteProduct(id).subscribe((res)=>console.log(res))
    this.root.navigateByUrl("/show-product");
    window.location.reload();
  }
  showUpdate(id:number){
    this.editShow=true;
    this.show=false;
    this.service.sendData(id);
    
  }
  getImageUrl(image: string): string {
    console.log(image);
    return `/assets/productImages/${image}`; 
   
    // Assuming productImages is served from this endpoint
  }
 


}
