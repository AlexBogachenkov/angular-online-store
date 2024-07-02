import {Component, inject, Input} from '@angular/core';
import {IProduct} from "../models/iproduct";
import {CurrencyPipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-information-page',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-information-page.component.html',
  styleUrl: './product-information-page.component.css'
})
export class ProductInformationPageComponent {
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    const productId = Number(this.route.snapshot.params['id']);
    this.productsService.getById(productId).subscribe(
      product => this.product = product
    );
  }
}
