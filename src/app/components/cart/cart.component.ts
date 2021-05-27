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
  constructor(public orderservice:OrderService) {      
  
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





    
}
