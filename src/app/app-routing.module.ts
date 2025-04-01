import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './inicio/acerca-de/acerca-de.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
 { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent},
  { path: 'acerca-de', component:AcercaDeComponent },
  {path: 'home', component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
