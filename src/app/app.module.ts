import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent} from './products/product-list.component';
import { ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { StarComponent} from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './home/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    LandingPageComponent,
    LoginComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',canActivate: [ProductDetailGuard],
      component: ProductDetailComponent },
      { path: 'welcome', component:  LandingPageComponent},
      { path: 'login', component:  LoginComponent},
      { path: 'shop', component:  ShopComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} //used to display a 404 page but in our case we will route back to the welcome page
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
