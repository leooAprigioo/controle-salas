import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

/* Modulos externos */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IgxCalendarModule } from 'igniteui-angular';

/* Componentes */
import { ListarSalasComponent } from './listar-salas/listar-salas.component';
import { FormularioSalaComponent } from './formulario-sala/formulario-sala.component';

/* Modulos */
import { ComponentesModule } from './componentes/componentes.module';
import { DescricaoSalaComponent } from './descricao-sala/descricao-sala.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListarSalasComponent,
    FormularioSalaComponent,
    DescricaoSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ComponentesModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IgxCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
