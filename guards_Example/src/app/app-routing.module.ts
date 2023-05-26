import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { canActivateChildGuard, canActivateGuard, canDeactivateGuard, isAdminGuard, isUserGuard, resolveGuard } from './guards/guards';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: "", redirectTo: "/home" , pathMatch: "full"},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "dashboard", component: AdminComponent, canMatch: [isAdminGuard]},
  { path: "dashboard", component: UserComponent, canMatch: [isUserGuard]},
  {
    path: "products", component: ProductsComponent, 
    canActivate: [canActivateGuard], 
    canActivateChild: [canActivateChildGuard], //burada tanımlayalım.
    //products'a girildiği taktirde çıakrken kontrol edilsin istiyorsak,
    canDeactivate: [canDeactivateGuard], //şeklinde tanımlayabiliriz.
    resolve: {photos : resolveGuard},

    children: [
      { path: "detail/:id", component: ProductDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
