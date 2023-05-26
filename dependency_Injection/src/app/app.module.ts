import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { ProductService } from './productservice';
import { AComponent } from './a.component';
import { BComponent } from './b.component';


@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  //providers: [ProductService], //DI Token - Default Type Token
  //providers: [{provide: ProductService, useClass: ProductService}],//yukarıdaki işlemin arkaplandaki hali. - Type Token
  //providers: [{provide: "productService", useClass: ProductService}],//String Token
  // providers: [
  //   {provide: productServiceIT, useClass: ProductService},
  //   //{provide:"example", useValue:"merhaba"}
  //   {provide:"example", useValue:() => {
  //     return "merhaba"
  //   }}
  // ],
  // providers: [
  //   {provide: "productService", useFactory: (httpClient: HttpClient) => {
  //     const obs = httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe({next: data => console.log(data)})
  //     return new ProductService();
  //   }, deps:[HttpClient]
  // }
  // ],
  //HttpClient API'lara istekte bulunmamızı sağlayan hazır bir kütüphanedir.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
