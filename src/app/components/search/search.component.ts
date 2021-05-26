import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../_Models/Product';
import { ProductService } from '../_Services/product.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search :Product []=[];
  constructor(public s:ProductService,public ar:ActivatedRoute) {}

  ngOnInit(): void {
    let str :string =""
        this.ar.params.subscribe(
        a=> {str = a['str']
             console.log(str)
        }
        )
        this.s.searchby(str).subscribe(
          a=>{
            this.search = a
            console.log(a)
            console.log(str)
            console.log(typeof( this.search));
          }
        )

      }
    }


