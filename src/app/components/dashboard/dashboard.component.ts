import { Component, OnInit } from '@angular/core';
import { Product } from '../_Models/Product';
import { ProductService } from '../_Services/product.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
  constructor(private myproduct:ProductService,private router: Router) { }

  products:any;

  ngOnInit(): void {
    this.myproduct.getAllProducts().subscribe(
      (res)=>{this.products = res;},
      (err)=>{console.log(err);}
    );
  }


  delete(id: any){
    let result = confirm("Are you sure?");

    if(result){
      this.myproduct.deleteById(id).subscribe(
        (res)=>{console.log(res);},
        (err)=>{console.log(err);}
      );
      this.products = this.products.filter((item: { id: any; }) => item.id != id);
      this.router.navigateByUrl('/dashboard');

    }
    
  }

}
