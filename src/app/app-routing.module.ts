import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdectsComponent } from './prodects/prodects.component';
import { AdminProdectComponent } from './admin/admin-prodect/admin-prodect.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'Prodect' , component : ProdectsComponent},
  {path: 'order' , component : MyOrdersComponent },
  {path: 'admin/Prodect' , component : AdminProdectComponent },
  {path: 'admin/order' , component : AdminOrdersComponent},
  {path: 'ShopingCart' , component : ShopingCartComponent},
  {path: 'login' , component : LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
