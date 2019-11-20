import { Component } from '@angular/core';

  /**
   *
   * Componente principal onde ficarão informações gerais do aplicativo
   * 
   */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

    /**
   *
   * Titulo da aplicação
   * 
   */
  title = 'controle-salas';
}
