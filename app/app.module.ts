import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestOneComponent } from './test-one-component/test-one.component';
import { TestFromCliComponent } from './test-from-cli/test-from-cli.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductIteamComponent } from './core/product-feature/product-iteam/product-iteam.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { ProductFilterComponent } from './core/product-feature/product-filter/product-filter.component';
import { ProductService } from './_services/product.services.ts/product.services';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductAddComponent } from './core/product-feature/product-add/product-add.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductSearchComponent } from './core/product-feature/product-search/product-search.component';
@NgModule({
  declarations: [
    AppComponent,
    TestOneComponent,
    TestFromCliComponent,
    NavbarComponent,
    ProductIteamComponent,
    ProductListingComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    NotFoundComponent,
    ProductSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
