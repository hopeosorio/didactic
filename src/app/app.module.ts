import { InscripcionAlumnosComponent } from './component/inscripcion-alumnos/inscripcion-alumnos.component';
import { OrdenarTemasComponent } from './component/ordenar-temas/ordenar-temas.component';
import { AgregarTemasComponent } from './component/agregar-temas/agregar-temas.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './component/lista/lista.component';
import { RegistroComponent } from './component/registro/registro.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    RegistroComponent,
    AgregarTemasComponent,
    OrdenarTemasComponent,
    InscripcionAlumnosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
