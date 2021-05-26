import { Component, OnInit } from '@angular/core';



import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_Models/Product';
import { ProductService } from '../_Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
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

        // this.ProductService.getProductById(this.id).subscribe(
        //   (res)=>{this.product=res},
        //   (err)=>{console.log(err)}
        // )

        
  }




  

}
