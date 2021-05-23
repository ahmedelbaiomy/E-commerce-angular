import { Component, OnInit } from '@angular/core';
import { UserService } from '../_Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public u: UserService,private router:Router) { }
  logout(){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
     // this.router.navigateByUrl('/blog/list')
    })
    this.u.logout();

  }


  ngOnInit(): void {
  }

}
