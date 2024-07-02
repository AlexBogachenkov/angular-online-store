import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {ProductInformationPageComponent} from "./product-information-page/product-information-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TopNavComponent, ProductsPageComponent, ProductInformationPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-online-store';
}
