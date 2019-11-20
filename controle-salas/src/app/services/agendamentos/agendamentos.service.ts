import { Injectable } from '@angular/core';

import { ConexaoBdService} from "../../config/conexao-bd";

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Agendamento } from '../../models/Agendamento';
import { Observable } from 'rxjs';


  /**
   *
   * Injetavel de serviço de agendamento para manipulação da API
   * 
   */
@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

    /**
   *
   * Nome da API a ser manipulada
   * 
   */
  private _apiNome = 'agendamentos'

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
   * Obtem a lista de todos os agendamentos com base no nome
   * @returns {Observable} Lista de agendamentos
   * 
   */
  list():Observable<HttpResponse<Agendamento[]>> {
    return this.httpClient.get<Agendamento[]>(this.conexaoBd.caminhoCompleto + this._apiNome, {observe: 'response'});
  };

  /**
   *
   * Obtem um agendamento com base no seu [id]
   * 
   * @param {number} id Identificador do agendamento
   * @returns {Observable} Um agendamento
   * 
   */
  get(id: number): Observable<Agendamento> {
    return this.httpClient.get<Agendamento>(this.conexaoBd.caminhoCompleto + this._apiNome + '/' + id.toString());
  }


    /**
   *
   * Obtem um agendamento com base no indentificador da sala
   * 
   * @param {number} id_sala Identificador da sala
   * @returns {Observable} Um agendamento
   * 
   */
  getPorSala(id_sala: number): Observable<Agendamento[]> {
    return this.httpClient.get<Agendamento[]>(this.conexaoBd.caminhoCompleto + this._apiNome + '/sala/' + id_sala.toString());
  }

    /**
   *
   * Insere um agendamento na coleção de dados da API
   * 
   * @param {Agendamento} agendamento Dados do agendamento
   * @returns {Observable} Um agendamento
   * 
   */
  post(agendamento: Agendamento): Observable<Agendamento> {
    let dados: any = {
      "dados": agendamento
    } 

    return this.httpClient.post<Agendamento>(this.conexaoBd.caminhoCompleto + this._apiNome, dados, this.conexaoBd.httpOptions);
  }

    /**
   *
   * Insere uma lista de agendamentos na coleção de dados da API
   * 
   * @param {Agendamento[]} agendamento Lista de dados do agendamento
   * @returns {Observable} Uma lista de agendamentos
   * 
   */
  postArray(agendamento: Agendamento[]): Observable<Agendamento[]> {

    let dadosArray = []
    agendamento.map(data => {
      dadosArray.push(
        {
          nomeResponsavel: data.nomeResponsavel,
          nomeTurma: data.nomeTurma,
          data: data.data.getFullYear().toString() + '-' + (data.data.getMonth() + 1).toString() + '-' + data.data.getDate().toString(),
          id_sala: data.id_sala
        }
      )
    });

    let dados: any = {
      "dados": dadosArray
    } 

    return this.httpClient.post<Agendamento[]>(this.conexaoBd.caminhoCompleto + this._apiNome + '/array', dados, this.conexaoBd.httpOptions);
  }


    /**
   *
   * Atualiza um agendamento na coleção de dados da API
   * 
   * @param {number} id Identificador do agendamento a ser atualizado
   * @param {Agendamento} agendamento Dados do agendamento
   * @returns {Observable} Um agendamento
   * 
   */
  put(id: number, agendamento: Agendamento): Observable<Agendamento> {
    let dados: any = {
      "dados": agendamento
    } 

    return this.httpClient.put<Agendamento>(this.conexaoBd.caminhoCompleto + this._apiNome + '/' + id.toString(), dados, this.conexaoBd.httpOptions);
  }

    /**
   *
   * Deleta um agendamento na coleção de dados da API
   * 
   * @param {number} id Identificador do agendamento a ser deletado
   * @returns {Observable} Uma lista de agendamentos
   * 
   */
  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.conexaoBd.caminhoCompleto + this._apiNome + '/' + id.toString(), this.conexaoBd.httpOptions);
  }
}
