import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


  /**
   * 
   * Componente fornece uma estrutura de cabeçalho que pode ser usado em rotas aninhadas
   * 
   */
@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  /**
   * 
   * Titulo do cabeçalho
   * 
   */
  @Input() titulo: string;

  /**
   * 
   * Subtitulo do cabeçalho
   * 
   */
  @Input() descricao: string;

  /**
   * 
   * Injeta um objeto do tipo [Location] para redirecionamento de rota
   * 
   */
  constructor(private _location: Location) { }

  /**
   * 
   * @ignore
   * 
   */
  ngOnInit() {
  }

  /**
   * 
   * Redireciona para a localização anterior
   * 
   */
  goBack() {
    this._location.back();
  }

  /**
   * 
   * Icone de seta esquerda
   * 
   */
  faChevronLeft = faChevronLeft;

}
