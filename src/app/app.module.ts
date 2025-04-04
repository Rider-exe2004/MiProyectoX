import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './inicio/navbar/navbar.component';
import { FooterComponent } from './inicio/footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { AcercaDeComponent } from './inicio/acerca-de/acerca-de.component';
import { HomeComponent } from './inicio/home/home.component';
import { IosComponent } from './ios/ios.component';
import { AndroidComponent } from './android/android.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { PcsComponent } from './pcs/pcs.component';
import { TvsComponent } from './tvs/tvs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductosComponent,
    AcercaDeComponent,
    HomeComponent,
    IosComponent,
    AndroidComponent,
    LaptopsComponent,
    PcsComponent,
    TvsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
