import { Component, OnInit } from '@angular/core';
import { Product } from '../_Models/Product';
import { ProductService } from '../_Services/product.service';
import { OrderService } from '../_Services/order.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  currentProduct:any=null
// id;
  products: Product[] = [];
  img = "assets/img/category-1.jpg";
  constructor(public ProductService: ProductService, private orderService:OrderService) { }

  ngOnInit(): void {

    this.ProductService.getAllProducts().subscribe(
      d => this.products = d
    )
  }
  addToCart(item: any) {
    this.orderService.addData(item)
    console.log(item)
  }




 

}
