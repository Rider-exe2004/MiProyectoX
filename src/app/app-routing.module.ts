import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './inicio/acerca-de/acerca-de.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './inicio/home/home.component';
import { IosComponent } from './ios/ios.component';  // Componente para la vista de iOS
import { AndroidComponent } from './android/android.component';  // Componente para Android
import { LaptopsComponent } from './laptops/laptops.component';  // Componente para laptops
import { PcsComponent } from './pcs/pcs.component';  // Componente para pcs
import { TvsComponent } from './tvs/tvs.component';

const routes: Routes = [
  
  {path: 'home', component:HomeComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'acerca-de', component:AcercaDeComponent },
  { path: 'ios', component: IosComponent },
  { path: 'android', component: AndroidComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'pcs', component: PcsComponent },
  { path: 'tvs', component: TvsComponent },
  { path: '', redirectTo: '/ios', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
