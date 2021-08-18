import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  products: any

  // Serviceを経由してngOnInitのthis.productにproduct情報を入れたい
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProducts()

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data)=>{
        this.products = data
        console.log('次のデータが出力されました。' + data)
      },
      (err)=>{
        console.log('次のエラーが発生しました。' + err)
      }
    )
  }
}
