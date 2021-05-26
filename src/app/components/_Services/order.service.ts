import { HttpClient } from '@angular/common/http';
import { User } from '../_Models/User';
import { Order } from '../_Models/Order';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class OrderService {
    constructor(private http: HttpClient){}

    public token: any = localStorage.getItem('access_token');
    baseUrl = "http://localhost:3000/orders";

    addToCart(payload: any){
        return this.http.post(`baseUrl/`,payload)
    }
    getCartItem(){
        return this.http.get(`baseUrl/orders`);
    }

    increaseQty(payload: any){
        return this.http.post(`baseUrl/orders`,payload)
    }

    emptyCart(){
        return this.http.delete(`baseUrl/orders/empty-cart`);
    }
}