// <<<<<<< HEAD
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Products } from '../_Models/Products';
// import { Token } from '@angular/compiler/src/ml_parser/lexer';
// import { UserService } from '../components/_Services/user.service';
// =======
// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Products } from '../_Models/Products';
// // import { Token } from '@angular/compiler/src/ml_parser/lexer';
// // import { UserService } from '../components/_Services/user.service';
// >>>>>>> d31ad90c9d8e8d80798d3ac61fe9cc31c05ccc3a


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsService {
//   public token: any = localStorage.getItem('access_token');

//   add(nproduct: FormData) {
//     return this.http.post<Products>("http://localhost:3000/api/products", nproduct, { headers: { authorization: this.token } });

//   }

//   getAll() {
//     return this.http.get<Products[]>("http://localhost:3000/api/products")

//   }

//  updateProduct(id:any,Product:any){
//     return this.http.put(`http://localhost:3000/api/products/${id}`,Product);
//   }
//   getProductById(id:any){
//     return this.http.get(`http://localhost:3000/api/products/${id}`)
//   }




//   DeleteProductById(id:any){
//     return this.http.delete(`http://localhost:3000/api/products/${id}`);
//   }

//   searchby(search: string) {
//     return this.http.get<Products[]>("http://localhost:3000/api/products/search/" + search, { headers: { authorization: this.token } });
//   }

//   constructor(private http: HttpClient, private u: UserService) { }
//   flag: boolean = false;
// }
