import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerProductoComponent,
    AgregarProductoComponent,
    EliminarProductoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
