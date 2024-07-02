import { Routes } from '@angular/router';
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {ProductInformationPageComponent} from "./product-information-page/product-information-page.component";

export const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
    title: 'Home',
  },
  {
    path: 'products/:id',
    component: ProductInformationPageComponent,
    title: 'Product information',
  }
];
