import {Component, OnInit} from '@angular/core';
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/iproduct";

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products;
      console.log(this.products)
    });
  }

}
