import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomStrategy } from './strategies/custom.strategy';

const routes: Routes = [
  // { path: "", component: HomeComponent },
  // { path: "home", component: HomeComponent },
  // { path: "customers", loadChildren : () => import("../app/components/customers/customers.module").then(m => m. CustomersModule), data: {preload:true}},
  // { path: "products", loadChildren : () => import("../app/components/products/products.module").then(m => m. ProductsModule), data: {preload:false}},
  { path: "standalone", loadComponent: () => import("./components/standalone/standalone.component").then(s => s.StandaloneComponent)},
  { path: "standalone2", loadComponent: () => import("./components/standalone2/standalone2.component").then(s => s.Standalone2Component)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
