import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {UserPageComponent} from "./user-page/user-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'user/:id', component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
