import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_Services/product.service';
import { OrderService } from '../_Services/order.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts:any;
  cartDetails:any;
  arr:any;
  constructor(public orderservice:OrderService) {
    this.arr = this.orderservice.cardDetails$?.value;
    for (let index = 0; index < this.arr.length; index++) {
      console.log("inside the loop",this.arr[index]);
      
    }
    console.log('card copmponet ->',this.orderservice.cardDetails$?.value);

  }
  

  ngOnInit(): void {
    this.getCart();
    
  }
  ngOnDestroy(){
    //this.orderservice.cardDetails$.unsubscribe()
  }

  getCart(): void {
    this.orderservice.getCartItem().subscribe((data:any) => {
      this.carts = data.data;
      console.log(this.carts);
    });
  }

  decreaseQty(): void {
    
  }

  increaseQty(id: any, quantity: any): void {

      alert('Product Added');
  }
  

  emptyCart(): void {
    this.orderservice.cardDetails$ = new BehaviorSubject<any>([]);;
      alert('Cart Emptied');
    };

}
