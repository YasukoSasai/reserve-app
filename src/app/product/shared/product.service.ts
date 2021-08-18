import { Injectable } from "@angular/core";
import { products } from "src/app/products";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()
export class ProductService{

  constructor(private http: HttpClient) { }

  // Observable形式、any型で行う
  getProducts(): Observable<any>{
    // API叩いてデータ取得　this.http.get
    // return products
    return this.http.get('/api/v1/products/')
  }
  getProductById(productId: string):Observable<any>{
    return this.http.get('/api/v1/products/'+ productId)
    
  }
}