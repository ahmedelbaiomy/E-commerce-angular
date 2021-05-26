import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../_Models/Products';
import { ProductsService } from '../../_Services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search :Products []=[];
  constructor(public s:ProductsService,public ar:ActivatedRoute) { }

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
          }
        )

      }
    }


