import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_Services/product.service';
import { OrderService } from '../_Services/order.service';

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


  increaseQty(id: any, quantity: any): void {
    const payload = {
      productId: id,
      quantity,
    };

    this.orderservice.increaseQty(payload).subscribe(()=>{
      this.getCart();
      alert('Product Added');
    });
  }

  emptyCart(): void {
    this.orderservice.emptyCart().subscribe(()=>{
      this.getCart();
      alert('Cart Emptied');
    });
  }
}
