  /**
   *
   * Modelo simples da sala
   * 
   */

export class Sala {
    /**
   *
   * Identificador da sala
   * 
   */
    public id : number;

    /**
   *
   * Nome da sala
   * 
   */
    public nome: string;

    /**
   *
   * Descrição da sala
   * 
   */
    public descricao : string;

    /**
   *
   * disponibilidade da sala no dia atual (opcional)
   * 
   */
    public disponibilidade: string;

    /**
   *
   * Inicia os valores dos atributos
   * 
   * @param {string} nome Nome da sala
   * @param {string} descricao Descricao da sala
   * @param {number} id (opcional) Identificador da sala
   * @param {string} disponibilidade (opcional) Disponibilidade da sala no dia
   * 
   */
    constructor(nome: string, descricao: string, id?: number, disponibilidade?: string) {
        this.nome = nome;
        this.descricao = descricao;
        disponibilidade ? this.disponibilidade = disponibilidade : '';
        id ? this.id = id : '';

    }
}