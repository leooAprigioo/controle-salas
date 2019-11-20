import { Component, OnInit } from '@angular/core';
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';

  /**
   *
   * Componente com a lista da salas
   * 
   */
@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.css']
})
export class ListarSalasComponent implements OnInit {

  /**
   *
   * @ignore
   * 
   */
  constructor(
  ) { }

  /**
   *
   * @ignore
   * 
   */
  ngOnInit() {
  }
  /* Lista de icones */
  
  /**
   *
   * Icone de adição
   * 
   */
  faPlus = faPlus;

  /**
   *
   * Icone de seta direita
   * 
   */
  faChevronRight = faChevronRight;


}
