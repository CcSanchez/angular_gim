import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuariosComponent } from './paginas/crear-usuarios/crear-usuarios.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';


const routes: Routes = [
  {path:"", component:UsuariosComponent},
  {path:"crearusuario", component:CrearUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
