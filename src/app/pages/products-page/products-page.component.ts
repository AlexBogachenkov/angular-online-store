import { Component } from '@angular/core';
import {ProductCardComponent} from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

}
