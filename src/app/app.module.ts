import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { UxproductsService } from './uxproducts.service';

@NgModule({
  declarations: [
    AppComponent,
    ManageProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UxproductsService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
