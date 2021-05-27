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
      if(!this.checkexistance(data)){
        this.carts = data.data;
        console.log("inside the check condition", this.carts);
      }else{
        let targetItem;
        for (let i = 0; i < this.carts.length; i++) {
          if(this.carts.data[i]==data[i])
          {
            targetItem = this.carts.data[i];
            console.log(targetItem);
            break;
          }
        }
        targetItem.quantity++;
      }
      console.log(this.carts);
    });
  }



  increaseQty(item: any): void {
    item.quantity++;
    alert('Product Increased by One');
  }
  
  decreaseQty(item:any): void {
    item.quantity--; 
    alert('Product Decreased by One');
  }


  emptyCart(): void {
    this.orderservice.cardDetails$ = new BehaviorSubject<any>([]);;
      alert('Cart Emptied');
  };


   
  checkexistance(item: any){

    for (let index = 0; index < this.carts.length; index++) {
      if(this.carts[index]._id==item._id)
      {
        console.log(this.carts);
        return true;
      }
    }
    return false;
  }
    
}
