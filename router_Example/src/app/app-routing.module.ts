import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  //default tanımlama her zaman en başa yazılır.
    { path: "", redirectTo:"/home", pathMatch: "full"}, 
    //herhangi bir rotaya yönlendirme yapılmamışsa /home'a redirect et. Yani HomeComponent'i default benimse.

    { path: "home", component: HomeComponent},
    { path: "home/:cocojambo", component: HomeComponent},
    { path: "about", component: AboutComponent},
    { path: "contact/a/b/c", component: ContactComponent},
    { path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
