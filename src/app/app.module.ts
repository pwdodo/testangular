import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdukComponent } from './component/produk/produk.component';
import { ProdukDetailComponent } from './component/produk-detail/produk-detail.component';
import { ProdukCariComponent } from './component/produk-cari/produk-cari.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdukComponent,
    ProdukDetailComponent,
    ProdukCariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
