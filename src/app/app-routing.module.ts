import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
   {path: 'home', component:HomeComponent},
   {path: 'cart', component:CartComponent},   
   {path: 'checkout', component:CheckoutComponent},   
   {path: 'login', component:LoginComponent},
   {path: 'register', component:RegisterComponent}   


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
