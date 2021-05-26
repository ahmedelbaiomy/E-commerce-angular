import { Component, OnInit } from '@angular/core';
import { UserService } from '../_Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search!:string ;
  constructor(public u: UserService,private router:Router) { }
  logout(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {

    })
    this.u.logout();

  }
  done(){
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"+this.search)
    this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
     this.router.navigateByUrl('/searches/'+this.search)
    });
   }

  ngOnInit(): void {
  }

}
