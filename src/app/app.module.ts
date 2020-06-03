import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProdectsComponent } from './prodects/prodects.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProdectComponent } from './admin/admin-prodect/admin-prodect.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { LoginComponent } from './login/login.component';

import { environment } from 'src/environments/environment';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProdectsComponent,
    MyOrdersComponent,
    AdminProdectComponent,
    AdminOrdersComponent,
    ShopingCartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule



  ],
  providers: [
    AuthGuardService,
    AuthService,
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
