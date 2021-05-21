import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './components/about/about.component';
import { CheckoutComponent} from './components/checkout/checkout.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
