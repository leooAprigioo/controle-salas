import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';

/**
 * 
 * Arquivo de configuração das requisições da API
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class ConexaoBdService {

  /**
   * 
   * @ignore
   * 
   */
  constructor() { }

  /**
   * 
   * Caminho base onde as API's irão acessar
   * 
   */
    private _caminho: string = 'http://localhost';

  /**
   * 
   * Porta onde a requisição será feita
   * 
   */
    private _porta: string = '8000';

  /**
   * 
   * URL complementar para acesso da API
   * 
   */
    private _subCaminho: string = 'api';

  /**
   * 
   * Obtem o caminho completo de acesso à API
   * 
   */
    public caminhoCompleto: string = this._caminho + ":" + this._porta + "/" + this._subCaminho + '/';

  /**
   * 
   * Cabeçalho para as requisições
   * 
   */
    public httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
    }

}
