import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent implements OnInit {

  postForm!:FormGroup;
  constructor(private service:CategoryService,
    private fb:FormBuilder,
    private router:Router
  ){}

  ngOnInit(): void {
    this.postForm=this.fb.group({
      name:[null,[Validators.required]],
      description:[null,[Validators.required]]
    })
      
  }
  addCategory(){
    console.log(this.postForm.value)
    this.service.postCategory(this.postForm.value).subscribe((res)=>
      console.log(res))
    this.router.navigateByUrl("/category");
    window.location.reload();
  }


}
