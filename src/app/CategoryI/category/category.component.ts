import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  categories!:any[];
  showAdd:boolean=false;
  showUpdate:boolean=false;
  

  constructor(private service:CategoryService,private root:Router

  ){}

ngOnInit(): void {
  this.getCategory();
    
}
getCategory(){
  this.service.showCategory().subscribe((res)=>{
    console.log(res)
    this.categories=res
  })
}
addCategory(){
  this.showAdd=true
  this.showUpdate=false;
}
updateCategory(id:number){
this.showUpdate=true;
this.showAdd=false;

//this.root.navigateByUrl("/update-category/"+id)
this.service.sendData(id);
}
deleteCategory(id:number){
  this.service.deleteCategory(id).subscribe((res)=>console.log(res));
  this.root.navigateByUrl("/category");
    window.location.reload();
}


}
