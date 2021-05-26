import { Component, OnInit } from '@angular/core';
import { Product } from '../_Models/Product';
import { ProductService } from '../_Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  products: Product[] = [];
  img = "assets/img/category-1.jpg";
  constructor(public ProductService: ProductService) { }

  ngOnInit(): void {

    this.ProductService.getAllProducts().subscribe(
      d => this.products = d
    )
  }

}
