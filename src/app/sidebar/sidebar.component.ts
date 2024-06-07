import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  constructor(private orderService:OrderServiceService){

  }

  ngOnInit(): void {
      
  }

  
}
