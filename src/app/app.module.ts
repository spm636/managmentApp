import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './CategoryI/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AddCategoryComponent } from './CategoryI/add-category/add-category.component';
import { UpdateCategoryComponent } from './CategoryI/update-category/update-category.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashBoardComponent } from './user-side/dash-board/dash-board.component';
import { UserSideBarComponent } from './user-side/user-side-bar/user-side-bar.component';
import { UserProductComponent } from './user-side/user-product/user-product.component';
import { BillingComponent } from './user-side/billing/billing.component';
import { UserHeaderComponent } from './user-side/user-header/user-header.component';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ShowProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    HeaderComponent,
    SidebarComponent,
    DashBoardComponent,
    UserSideBarComponent,
    UserProductComponent,
    BillingComponent,
    UserHeaderComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
