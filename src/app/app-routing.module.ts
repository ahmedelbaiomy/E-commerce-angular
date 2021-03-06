import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
 import { SearchComponent } from './components/search/search.component';
import { SettingUserComponent } from './components/setting-user/setting-user.component';


const routes: Routes = [
   {path: 'home', component:HomeComponent},
   {path: 'cart', component:CartComponent},
   {path: 'checkout', component:CheckoutComponent},
   {path: 'login', component:LoginComponent},
   {path: 'register', component:RegisterComponent},
   {path: 'product', component:ProductComponent},
   {path: 'about', component:AboutComponent},
   {path: 'setting',  component:SettingUserComponent},
   {path:'searches/:str',component:SearchComponent},
   {path: 'dashboard',  component:DashboardComponent},
   {path: 'edit/:id',  component:EditProductComponent},
   {path: 'products/:id',  component:ProductDetailsComponent},
   {path: '**', component:HomeComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
