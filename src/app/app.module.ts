import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CartSummaryComponent,
    ProductListComponent,
    PromoCodeComponent,
    CartHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [], // dung nhiều nơi mà ko cần khai báo
  bootstrap: [AppComponent]
})
export class AppModule { }
