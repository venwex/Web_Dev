import { Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent }
];
