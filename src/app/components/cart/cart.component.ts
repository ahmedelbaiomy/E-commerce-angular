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

  carts:any[] = [];
  cartDetails:any;
  totalPrice:number = 0;
  subPrice:number = 0;
  tax:number = 0;
  constructor(public orderservice:OrderService) {      
  
    console.log('card copmponet ->',this.orderservice.cardDetails$?.value);

  }
  
  // orderservice.cardDetails$?.value?.length,
  // calculate the total price 
  calcTotalPrice(){
    // total price
    let sub =0;
    console.log(this.carts);
    for (let i = 0; i < this.carts.length; i++) {
      sub += this.carts[i].price * this.carts[i].quantity ;
      console.log(this.subPrice);
    }
    this.subPrice = sub;
    // console.log(subPrice);
    this.tax = this.subPrice * 0.14;
    this.totalPrice = this.tax + this.subPrice;
    // return this.subPrice, this.tax, this.totalPrice;
  }



  ngOnInit(): void {
    this.carts = this.orderservice.cardDetails$?.value;
    //this.getCart();
    this.calcTotalPrice();
    
  }
  ngOnDestroy(){
    //this.orderservice.cardDetails$.unsubscribe()
  }






  getCart(): void {
    this.orderservice.getCartItem().subscribe((data:any) => {
      this.carts = data.data;
      console.log('Data------>',data);
    });
  }



  increaseQty(item: any): void {
    item.quantity++;
    alert('Product Increased by One');
    console.log("---->item-in-->",item);
    this.calcTotalPrice()
  }
  
  decreaseQty(item:any): void {
    item.quantity--; 
    
    alert('Product Decreased by One');
    if(item.quantity == 0 ) {
      this.carts = this.carts.filter((cartItem: any)=> cartItem._id !== item._id )
    }
    console.log("---->item-de-->",item);
    this.calcTotalPrice()
  }


  emptyCart(): void {
    this.orderservice.cardDetails$ = new BehaviorSubject<any>([]);;
      alert('Cart Emptied');
  };

    
}
