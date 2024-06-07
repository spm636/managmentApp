import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.scss'
})
export class UpdateCategoryComponent implements OnInit {
  postForm!:FormGroup;
  category:any;
  id:number=0;
  constructor(private service:CategoryService,
    private fb:FormBuilder,
    private router:Router,
    
  ){}

  ngOnInit(): void {
    this.getid();
    this. getById();
    
    this.postForm=this.fb.group({
      name:[null,[Validators.required]],
      description:[null,[Validators.required]]
    })
      
  }
  getid(){
    this.service.data$.subscribe(data=>{
      this.id=data;
    })
  }
  getById(){
    this.service.getCategoryById(this.id).subscribe((res)=>{console.log(res)
    this.category=res;
    console.log(res)
    this.postForm.patchValue(res);
    
    })
  }
  updateCategory(){
    console.log(this.postForm.value)
    
    this.service.updateCategory(this.id,this.postForm.value).subscribe((res)=>
      console.log(res))
    this.router.navigateByUrl("/category");
    window.location.reload();
  }



}
