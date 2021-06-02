import { Component, OnInit } from '@angular/core';
import { UserService } from '../_Services/user.service';
import { Router } from '@angular/router';
import { OrderService } from '../_Services/order.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search!:string ;
  constructor(public u: UserService,private router:Router,public orderservice:OrderService) { 
    console.log(this.orderservice.cardDetails$.value  )
    this.orderservice.cardDetails$.subscribe(item => {
      console.log('---->',item)
    });
  }
  logout(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {

    })
    this.u.logout();

  }
  done(){
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"+this.search)
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/searches/'+this.search)



    });
   }

  ngOnInit(): void {
  }

}
