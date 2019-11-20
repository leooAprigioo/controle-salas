  /**
   *
   * Modelo simples do agendamento
   * 
   */
export class Agendamento {

    /**
   *
   * Identificador do agendamento
   * 
   */
    public id : number;

    /**
   *
   * Nome do responsável pela sala
   * 
   */
    public nomeResponsavel: string;

    /**
   *
   * Nome da Turma que irá utilizar a sala
   * 
   */
    public nomeTurma : string;

    /**
   *
   * Data do agendamento
   * 
   */
    public data: Date;

    /**
   *
   * Identificador da sala a ser utilizada
   * 
   */
    public id_sala: number;

    /**
   *
   * Inicia os valores dos atributos
   * 
   * @param {string} nomeResponsavel Nome do responsável da sala
   * @param {string} nomeTurma Nome da turma a utilizar a sala
   * @param {Date} data Data do agendamento
   * @param {number} id_sala Identificador da sala a ser agendada
   * @param {number} id (opcional) Identificador do agendamento
   * 
   */
    constructor(nomeResponsavel: string, nomeTurma: string, data: Date, id_sala: number, id?: number) {
        this.id = id;
        this.nomeResponsavel = nomeResponsavel;
        this.nomeTurma =  nomeTurma;
        this.data = data;
        this.id_sala = id_sala;
    }
}