import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UxproductsService {

  constructor(private http: HttpClient) { }

  saveProduct(products: any[]) {
    return this.http.put('https://curd-500c7.firebaseio.com/products.json', products)
  }

  fetchProduct() {
    return this.http.get('https://curd-500c7.firebaseio.com/products.json')
  }

}
