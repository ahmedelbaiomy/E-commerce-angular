import { Component, OnInit } from '@angular/core';
import { Products } from '../../_Models/Products';
import { ProductsService } from '../../_Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  products: Products[] = [];
  img = "assets/img/category-1.jpg";
  constructor(public ProductsService: ProductsService) { }

  ngOnInit(): void {

    this.ProductsService.getAll().subscribe(
      d => this.products = d
    )
  }
  

}
