import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarSalasComponent } from './listar-salas/listar-salas.component';
import { FormularioSalaComponent } from './formulario-sala/formulario-sala.component';
import { DescricaoSalaComponent } from './descricao-sala/descricao-sala.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/listar-salas' },
  {path: 'listar-salas', component: ListarSalasComponent},
  {path: 'formulario-sala/:operacao', component: FormularioSalaComponent},
  {path: 'descricao-sala/:id', component: DescricaoSalaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
