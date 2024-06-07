import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './CategoryI/category/category.component';
import { AddCategoryComponent } from './CategoryI/add-category/add-category.component';
import { UpdateCategoryComponent } from './CategoryI/update-category/update-category.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { DashBoardComponent } from './user-side/dash-board/dash-board.component';
import { UserSideBarComponent } from './user-side/user-side-bar/user-side-bar.component';
import { UserProductComponent } from './user-side/user-product/user-product.component';
import { BillingComponent } from './user-side/billing/billing.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'category',component:CategoryComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'update-category/:id',component:UpdateCategoryComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'show-product',component:ShowProductComponent},
  {path:'',component:DashBoardComponent},
  {path:'user-sidebar',component:UserSideBarComponent},
  {path:'user-product/:id',component:UserProductComponent},
  {path:'billing',component:BillingComponent},
  {path:'report',component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
