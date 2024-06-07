import { Component, Input, OnInit, input } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { ProductService } from '../../service/product.service';
import { SharedService } from '../../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrl: './user-side-bar.component.scss'
})
export class UserSideBarComponent implements OnInit {
  category:any[]=[]
  showAll:boolean=false;
   
  constructor(private categoryService:CategoryService,
    private productService:ProductService,
    private shared:SharedService,
    private route:Router
  ){}

  ngOnInit(): void {
    this.showCategory();
      
  }
  showCategory(){
    this.categoryService.showCategory().subscribe((res)=>{
      this.category=res;
    })
  }
  showAllProduct(){
   
  
  this.route.navigateByUrl("/user-product/"+0)
  }
  showCategoryProduct(id:number){
   
    this.route.navigateByUrl("/user-product/"+id)
   
  }

}
