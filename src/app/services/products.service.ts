import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {IProduct} from "../models/iproduct";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<any>("https://dummyjson.com/products").pipe(
      map(response => response.products)
    );
  }

}

