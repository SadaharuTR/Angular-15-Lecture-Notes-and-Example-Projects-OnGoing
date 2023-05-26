import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  //customers path'ine karşılık customers.module'ün içerisindeki CustomersModule isimli sınıfı isteğe yüklemiş olduk.
  { path: "customers", loadChildren : () => import("../app/components/customers/customers.module").then(m => m. CustomersModule)},
  //aynı şekilde,
  { path: "products", loadChildren : () => import("../app/components/products/products.module").then(m => m. ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
