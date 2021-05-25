

import { Component, OnInit } from '@angular/core';



import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../_Models/Products';
import { ProductsService } from '../../_Services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  products: Products[] = [];
  currentProduct:any=null;
  message = '';
  // ProductToUpdate;

  nproduct: Products = new Products(" ", " "," "," ");
  selectedFile!: File;
  addForm!: FormGroup;
 
  Product = new FormData();

  constructor(public ProductsService: ProductsService, public ar:  ActivatedRoute, public route: Router, public fb: FormBuilder) { 
    this.addForm = this.fb.group({
      product: [''],
     description: [''],
      category: [''],

    })
  }

  ngOnInit(): void {
    this.ProductsService.getProductById(this.ar.snapshot.paramMap.get('id'));
    this.ProductsService.getAll().subscribe(
      d => this.products = d
    )
  }






  onselect(event: any) {
    const filelist: FileList = event.target.files;
    this.selectedFile = filelist[0];

  }

  save() {
    this.Product.append('product', this.nproduct.product)
    this.Product.append('description', this.nproduct.description)

    this.Product.append('price', this.nproduct.price);
    this.Product.append('photo', this.selectedFile);
    // this.Product.append('title', this.nproduct.category)
    


    this.ProductsService.add(this.Product).subscribe(
      a => {
        console.log(this.selectedFile)
        console.log(a)
        console.log(a.photo)

        console.log("hello"+this.Product)
      }
    )
    this.route.navigate(["/"]);
  }






  getProduct(id:any): void {
    this.ProductsService. getProductById(id)
      .subscribe(
        data => {
        this.currentProduct= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

        
  }


  updateProduct(): void {
    this.ProductsService.updateProduct(this.currentProduct.id, this.currentProduct)
      .subscribe(
        response => {
          console.log(response);
          this.message= 'The product was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }



// /home/asmaa/Downloads/E-commerce-angular/src
  

}
