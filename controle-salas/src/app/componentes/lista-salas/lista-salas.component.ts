import { Component, OnInit } from '@angular/core';
import { faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Sala } from '../../models/Sala';

import { SalasService } from "../../services/sala/salas.service"

/**
 * lista-salas componente
 * 
 * Exibe a lista de salas que estão cadastradas no momento
 *
 */
@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html',
  styleUrls: ['./lista-salas.component.css']
})
export class ListaSalasComponent implements OnInit {

  /**
   * 
   * Lista onde serão armazenadas as salas obtidas pela API
   */
  salas: Sala[] = [];
  /**
   * 
   * Lista intermediaria onde serão armazenadas as salas para serem manipuladas
   */
  salasTemporarias : Sala[] = [];
  /**
   * 
   * Usado para filtrar a disponibilidade da sala
   */
  disponibilidade: string = "";

  /**
   * 
   * Injeta um objeto do tipo [SalasService] para obter os dados da API
   * 
   */
  constructor(
    private _salasService: SalasService
  ) { }

  /**
   * 
   * Obtem os dados da API ao ser iniciado
   * 
   */
  ngOnInit() {
    this.buscarDados();
  }
  /**
   *
   * Executa todas as requisições do tipo GET necessárias
   * 
   */
  async buscarDados() {
    await this.getSalas();
  }

 /**
   *
   * A lista de salas volta a ser um objeto vazio
   * 
   */
  resetarSalas() {
    this.salas = [];
  } 

  /**
   * 
   * Busca as salas com o nome iniciados pelo valor digitado pelo usuário e os filtra com base na disponibilidade
   * 
   * @param {string} nomeSala  Nome da sala usado na busca
   * 
   */
  getSalas(nomeSala: string = "") {
    this.resetarSalas();
    this._salasService.list(nomeSala).subscribe(resp => {
      for (const sala of resp.body) {
        this.salas.push(
          new Sala(sala.nome, sala.descricao, sala.id, sala.disponibilidade)
        );
      }
      this.salasTemporarias = this.salas;
      this.filtrarDisponibilidade();
    });
  }

  /**
   * 
   * Filtra as salas com base na disponibilidade
   */

  filtrarDisponibilidade() {
    if (this.disponibilidade === "") {
      this.salasTemporarias = this.salas;
    } else {
      this.salasTemporarias = this.salas.filter((sala) => {
        return sala.disponibilidade === this.disponibilidade ? sala: '';
      });
    }
  }

  /**
   * 
   * Icone de seta para direita
   */
  faChevronRight = faChevronRight;
  /**
   * 
   * Icone de lupa
   */
  faSearch = faSearch;
}
