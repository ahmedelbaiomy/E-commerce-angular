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
  quantity = 0;
  addToCart(item: any) {
    item.quantity =1;
    const items = this.orderService.cardDetails$?.value
    let itemIsExist = false
    items.map((val: any) => {
      if(val._id == item._id) {
        itemIsExist = true
        val.quantity += 1
        return this.orderService.cardDetails$.next(this.orderService.cardDetails$.value)
      }
    })
    if (itemIsExist == false) {
      this.orderService.addData(item)
      console.log(item)
    }
   
  }




 

}
