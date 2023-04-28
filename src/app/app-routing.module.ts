import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdukCariComponent } from './component/produk-cari/produk-cari.component';
import { ProdukDetailComponent } from './component/produk-detail/produk-detail.component';
import { ProdukComponent } from './component/produk/produk.component';

const routes: Routes = [
  {path: 'produk', component: ProdukComponent},
  {path: 'produkDetail/:id', component: ProdukDetailComponent},
  {path: 'produkCari/:q', component: ProdukCariComponent},
  {path: '**', redirectTo: 'produk'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
