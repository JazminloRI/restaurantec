import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { BuscadorComponent } from './buscador/buscador.component';

const routes: Routes = [
  { path :'' ,redirectTo:'home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'agregarProducto', component: AgregarProductoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'eliminarProducto', component: EliminarProductoComponent },
  { path: 'verProducto', component: VerProductoComponent },
  { path: 'buscarProducto', component: BuscadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
