import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from '../list-product/list-product.component';
import { AddProductComponent } from '../add-product/add-product.component';

const appRoutes: Routes = [
  { path: 'allProducts', component: ListProductComponent },
  { path: 'listProducts', component: ListProductComponent, children: [
    { path: 'new', component: AddProductComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 

}
