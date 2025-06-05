import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { ActualizarLibroComponent } from './components/actualizar-libro/actualizar-libro.component';
import { EliminarLibroComponent } from './components/eliminar-libro/eliminar-libro.component';
import { BuscarLibroComponent } from './components/buscar-libro/buscar-libro.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: 'inicio/', component: InicioComponent },
  { path: 'libros/registrar', component: CrearLibroComponent },
  { path: 'libros/actualizar', component: ActualizarLibroComponent },
  { path: 'libros/eliminar', component: EliminarLibroComponent },
  { path: 'libros/buscar', component: BuscarLibroComponent },
  { path: 'login/', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
