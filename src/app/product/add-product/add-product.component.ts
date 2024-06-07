import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
  postForm!:FormGroup;
  slectedFile!:File;
  
  category:any[]=[];
  constructor(private service:ProductService,
    private fb:FormBuilder,
    private router:Router,
    private categoryService:CategoryService,
    
    
  ){}
   
  onFileChange(event: any): void {
    this.slectedFile = event.target.files[0];
    
  }
  ngOnInit(): void {
    this.showCategory()
    
      this.postForm=this.fb.group({
        name:[null,[Validators.required]],
        costPrice:[0,[Validators.required]],
        salePrice:[0,[Validators.required]],
        noOfQuantity:[0,[Validators.required]],
        //imagesUrl:[null,[Validators.required]],
        categoryId:[0,[Validators.required]]
      })
  }
  addProduct(){
    const formData:FormData=new FormData();
    formData.append('imagesUrl',this.slectedFile);
    formData.append('name',this.postForm.get('name')?.value);
    formData.append('categoryId',this.postForm.get('categoryId')?.value);
    formData.append('costPrice',this.postForm.get('costPrice')?.value);
    formData.append('salePrice',this.postForm.get('salePrice')?.value);
    formData.append('noOfQuantity',this.postForm.get('noOfQuantity')?.value);
    console.log(formData);
    this.service.postProduct(formData).subscribe((res)=>console.log(res))
   this.router.navigateByUrl("/show-product");
    window.location.reload();
  }
  // addProduct(): void {
  //   console.log(this.postForm.value);


  //   const formData = new FormData();
  //   formData.append('productDto', JSON.stringify(this.postForm.value));
  //   for (let i = 0; i < this.postForm.get('imagesUrl')?.value.length; i++) {
  //     formData.append('file', this.postForm.get('imagesUrl')?.value[i]);
  //   }

  //   this.service.postProduct(formData).subscribe((res) => {
  //     console.log(res);
  //     this.router.navigateByUrl("/show-product");
  //   });
  // }
  showCategory(){
    this.categoryService.showCategory().subscribe((res)=>{console.log(res)
      this.category=res;
    })
  }
  
  


}
