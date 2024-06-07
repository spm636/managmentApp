import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../service/shared.service';


@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrl: './user-product.component.scss'
  
})
export class UserProductComponent implements OnInit {

  product:any[]=[]
  showBill:boolean=false;
  productId:number=0;
  cart:any;
  cid:number=0;
  pid!:number|null;

  constructor(private productService:ProductService,private router:Router,private cdr: ChangeDetectorRef,
    private shared:SharedService,private root:ActivatedRoute
  ){}

  ngOnInit(): void {
    
   this.showAll()
   
   

   // this.addToCart1(this.productId);
      
  }
  
  showAll(){
    this.root.paramMap.subscribe(params=>{
      const idParam=params.get('id')
      this.pid = idParam !== null ? +idParam : null;
      this.productService.prdoucyByCategory(this.pid).subscribe((res)=>{
        this.product=res;
        
       })
      
   } )
    
    
  }
  
  getImageUrl(image: string): string {
    console.log(image);
    return `/assets/productImages/${image}`; 
   
    // Assuming productImages is served from this endpoint
  }
  
  addToCart1(id:number){
  return this.productService.addToCart(id).subscribe((res)=>{
    console.log(res)
    window.location.reload();
   
    
  })
  }

}
