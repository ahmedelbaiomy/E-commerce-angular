import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './components/about/about.component';
import { CheckoutComponent} from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'home', component: HomeComponent},
  //  {path: '/', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
