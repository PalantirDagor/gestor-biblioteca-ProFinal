import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { BuscarLibroComponent } from './components/buscar-libro/buscar-libro.component';
import { ActualizarLibroComponent } from './components/actualizar-libro/actualizar-libro.component';
import { EliminarLibroComponent } from './components/eliminar-libro/eliminar-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    CrearLibroComponent,
    BuscarLibroComponent,
    ActualizarLibroComponent,
    EliminarLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
