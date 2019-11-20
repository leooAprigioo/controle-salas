import { Injectable } from '@angular/core';

import { ConexaoBdService} from "../../config/conexao-bd";

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Sala } from '../../models/Sala';
import { Observable } from 'rxjs';

  /**
   *
   * Injetavel de serviço de sala para manipulação da API
   * 
   */
@Injectable({
  providedIn: 'root'
})
export class SalasService {

  /**
   *
   * Nome da API a ser manipulada
   * 
   */
  private _apiNome = 'salas'

    /**
   *
   * Objeto do tipo [ConexaoBdService] para manipulação da configuração da API
   * 
   * Objeto do tipo [HttpClient] para manipulação das requisições HTTP
   * 
   */
  constructor(
    private conexaoBd : ConexaoBdService,
    private httpClient : HttpClient
  ) { }

    /**
   *
   * Obtem uma lista de salas da coleção de dados da API
   * 
   * @param {string} nome Nome da sala a ser obtida
   * @returns {Observable} Lista de salas
   * 
   */
  list(nomeSala: string = ""):Observable<HttpResponse<Sala[]>> {
    return this.httpClient.get<Sala[]>(this.conexaoBd.caminhoCompleto + this._apiNome + "?nome="+nomeSala, {observe: 'response'});
  };


    /**
   *
   * Obtem uma sala da coleção de dados da API
   * 
   * @param {number} id Identificador da sala a ser obtida
   * @returns {Observable} Uma sala
   * 
   */
  get(id: number): Observable<Sala> {
    return this.httpClient.get<Sala>(this.conexaoBd.caminhoCompleto + this._apiNome + '/' + id.toString());
  }

    /**
   *
   * Insere uma sala na coleção de dados da API
   * 
   * @param {Sala} sala Dados da sala
   * @returns {Observable} Uma sala
   * 
   */
  post(sala: Sala): Observable<Sala> {
    let dados: any = {
      "dados": sala
    } 

    return this.httpClient.post<Sala>(this.conexaoBd.caminhoCompleto + this._apiNome, dados, this.conexaoBd.httpOptions);
  }


    /**
   *
   * Atualiza uma sala na coleção de dados da API
   * 
   * @param {number} id Identificador da sala a ser atualizada
   * @param {Sala} sala Dados da sala
   * @returns {Observable} Uma sala
   * 
   */
  put(id: number, sala: Sala): Observable<Sala> {
    let dados: any = {
      "dados": sala
    } 

    return this.httpClient.put<Sala>(this.conexaoBd.caminhoCompleto + this._apiNome + '/' + id.toString(), dados, this.conexaoBd.httpOptions);
  }


    /**
   *
   * Deleta uma sala na coleção de dados da API
   * 
   * @param {number} id Identificador da sala a ser deletada
   * @returns {Observable} Mensagem de sucesso
   * 
   */
  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.conexaoBd.caminhoCompleto + this._apiNome + '/' + id.toString(), this.conexaoBd.httpOptions);
  }

}
