import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../service/order-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent implements OnInit {
  postForm!:FormGroup

  constructor(private orderService:OrderServiceService,
    private fb:FormBuilder
  ){

  }

  ngOnInit(): void {
    this.postForm=this.fb.group({
      localDate:[null,[Validators.required]],
      
    })
      
  }


  report(){
    this.orderService.dowloadReport(this.postForm.value).subscribe((blob)=>{

     
         const url = window.URL.createObjectURL(blob);
         const a = document.createElement('a');
         a.href = url;
         a.download = 'bill.pdf'; // Specify the filename
         document.body.appendChild(a);
         a.click();
         document.body.removeChild(a);
         window.URL.revokeObjectURL(url);
       }, (error) => {
         console.error('Download failed', error);
       });

 }

}
