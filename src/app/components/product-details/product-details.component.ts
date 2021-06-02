import { Component, OnInit } from '@angular/core';



import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_Models/Product';
import { ProductService } from '../_Services/product.service';
import { OrderService } from '../_Services/order.service';



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

  constructor(public ProductService: ProductService, public ar:  ActivatedRoute, public route: Router, public fb: FormBuilder,public orderService:OrderService ) { 
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

  quantity = 0;
  addToCart(item: any) {
    item.quantity =1;
    const items = this.orderService.cardDetails$?.value
    let itemIsExist = false
    items.map((val: any) => {
      if(val._id == item._id) {
        itemIsExist = true
        val.quantity += 1
        return this.orderService.cardDetails$.next(this.orderService.cardDetails$.value)
      }
    })
    if (itemIsExist == false) {
      this.orderService.addData(item)
      console.log(item)
    }
   
  }




  

}
