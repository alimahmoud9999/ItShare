import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdectsComponent } from './prodects/prodects.component' ;
import { AdminProdectComponent } from './admin/admin-prodect/admin-prodect.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';


const routes: Routes = [
  {path: 'Prodect' , component : ProdectsComponent ,  canActivate :[AuthGuardService]},
  {path: 'order' , component : MyOrdersComponent,  canActivate : [AuthGuardService] },
  {path: 'admin/Prodect' , component : AdminProdectComponent , canActivate :[AuthGuardService,AdminAuthGuardService] },
  {path: 'admin/order' , component : AdminOrdersComponent , canActivate :[AuthGuardService,AdminAuthGuardService]},
  {path: 'ShopingCart' , component : ShopingCartComponent , canActivate : [AuthGuardService]},
  {path: 'login' , component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
