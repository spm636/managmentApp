import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {
    updateForm!:FormGroup;
    category:any[]=[];
    id:number=0;
    product:any[]=[]
    selectedFile!:File;
  constructor(private service:ProductService,
    private root:Router,
    private fb:FormBuilder,
    private categoryService:CategoryService
  ){}
  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
    
  }
  ngOnInit(): void {
    this.getid();
    this.getById();
    this.showCategory();
   
    this.updateForm=this.fb.group({
      name:[null,[Validators.required]],
      costPrice:[0,[Validators.required]],
      salePrice:[0,[Validators.required]],
      noOfQuantity:[0,[Validators.required]],
      //imagesUrl:[null,[Validators.required]],
      categoryId:[0,[Validators.required]],
    })

      
  }
  getid(){
    this.service.data$.subscribe(data=>{
      this.id=data;
    })
  }
  getById(){
    this.service.getById(this.id).subscribe((res)=>{
    console.log(res);
    this.product=res;
    this.updateForm.patchValue(res);
  })
  }
  editProduct(){
    const formData:FormData=new FormData();
    formData.append('imagesUrl',this.selectedFile);
    formData.append('name',this.updateForm.get('name')?.value);
    formData.append('categoryId',this.updateForm.get('categoryId')?.value);
    formData.append('costPrice',this.updateForm.get('costPrice')?.value);
    formData.append('salePrice',this.updateForm.get('salePrice')?.value);
    formData.append('noOfQuantity',this.updateForm.get('noOfQuantity')?.value);
    console.log(this.updateForm.value)
    
    this.service.updateProduct(this.id,formData).subscribe((res)=>console.log(res))
    console.log(this.id)
    this.root.navigateByUrl("/show-product");
    window.location.reload();
  }
  showCategory(){
    this.categoryService.showCategory().subscribe((res)=>{console.log(res)
      this.category=res;
    })
  }
  
 

}
