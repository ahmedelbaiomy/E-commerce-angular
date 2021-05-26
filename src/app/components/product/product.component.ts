import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_Models/Product';
import { ProductService } from '../_Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  currentProduct:any=null;
  // ProductToUpdate;

  nproduct: Product = new Product(" ", " "," "," ");
  selectedFile!: File;
  addForm!: FormGroup;

  Product = new FormData();

  constructor(public ProductService: ProductService, public ar:  ActivatedRoute, public route: Router, public fb: FormBuilder) {
    this.addForm = this.fb.group({
      product: [''],
     description: [''],
      category: [''],

    })
  }

  ngOnInit(): void {
    this.getProduct(this.ar.snapshot.paramMap.get('id'));
  }






  onselect(event: any) {
    const filelist: FileList = event.target.files;
    this.selectedFile = filelist[0];

  }

  save() {
    this.Product.append('title', this.nproduct.title)
    this.Product.append('description', this.nproduct.description)

    this.Product.append('price', this.nproduct.price);
    this.Product.append('photo', this.selectedFile);
    // this.Product.append('title', this.nproduct.category)



    this.ProductService.add(this.Product).subscribe(
      a => {
        console.log(this.selectedFile)
        console.log(a)
        console.log(a.photo)

        console.log("hello"+this.Product)
      }
    )
    this.route.navigateByUrl('/home');
  }






  getProduct(id:any): void {
    this.ProductService. getProductById(id)
      .subscribe(
        data => {
        this.currentProduct= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });


  }






}
