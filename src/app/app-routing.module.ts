import { HomeComponent } from './component/home/home.component';
import { InscripcionAlumnosComponent } from './component/inscripcion-alumnos/inscripcion-alumnos.component';
import { AgregarTemasComponent } from './component/agregar-temas/agregar-temas.component';
import { OrdenarTemasComponent } from './component/ordenar-temas/ordenar-temas.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent } from './component/lista/lista.component';
import { RegistroComponent } from './component/registro/registro.component';

const routes: Routes = [
  {path:"", component:ListaComponent},
  {path:"lista", component:ListaComponent},
  {path:"registro", component:RegistroComponent},
  {path:"ordenar-temas", component:OrdenarTemasComponent},
  {path:"agregar-temas", component:AgregarTemasComponent},
  {path:"inscripcion-alumnos", component:InscripcionAlumnosComponent},
  {path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
