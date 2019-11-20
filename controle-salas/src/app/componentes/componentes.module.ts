import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ListaSalasComponent } from './lista-salas/lista-salas.component';

import { FormsModule } from '@angular/forms';

/* Modulos externos */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ModalSimplesComponent } from './modal-simples/modal-simples.component';

@NgModule({
  declarations: [
    ListaSalasComponent,
    CabecalhoComponent,
    ModalSimplesComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ListaSalasComponent,
    CabecalhoComponent,
    ModalSimplesComponent
  ]
})
export class ComponentesModule { }
