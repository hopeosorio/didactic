import { Instructor3Component } from './components/instructor3/instructor3.component';
import { Instructor2Component } from './components/instructor2/instructor2.component';
import { Instructor1Component } from './components/instructor1/instructor1.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'alumnos', component:AlumnosComponent},
  {path: 'administrador', component:AdministradorComponent},
  {path:'instructor', component:InstructorComponent},
  {path: 'instructor1', component:Instructor1Component},
  {path: 'instructor2', component:Instructor2Component},
  {path: 'instructor3', component:Instructor3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
