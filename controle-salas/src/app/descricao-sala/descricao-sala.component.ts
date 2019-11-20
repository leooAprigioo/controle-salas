import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxCalendarComponent, DateRangeType } from 'igniteui-angular';

import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { SalasService } from '../services/sala/salas.service';
import { AgendamentosService } from '../services/agendamentos/agendamentos.service';
import { Sala } from '../models/Sala';
import { Agendamento } from '../models/Agendamento';

  /**
   *
   * Variavel para utilização do Jquery
   * 
   */
declare var $ : any;

  /**
   * 
   * Componente onde a descrição da sala e os agendamentos é detalhada
   * 
   */
@Component({
  selector: 'app-descricao-sala',
  templateUrl: './descricao-sala.component.html',
  styleUrls: ['./descricao-sala.component.css', './tema-calendario.scss']
})
export class DescricaoSalaComponent implements OnInit {

  /**
   * 
   * Exibe o formulário de agendamento com base no seu valor
   * 
   */
  formulario: boolean = false;
  /**
   * 
   * Alterna o tipo do calendario com base no formulario
   * 
   */
  tipoFormulario: string = 'single';

  /**
   * 
   * Grupo de campos do formulário
   * 
   */
  formGroup: FormGroup;

  /**
   * 
   * Verifica se o formulário foi enviado
   * 
   */
  enviado: boolean = false;

  /**
   * 
   * Objeto onde as informações da sala serão armazenadas
   * 
   */
  sala: Sala;

  /**
   * 
   * Objeto onde os agendamentos serão armazenados
   * 
   */
  agendamentos: Agendamento[] = [];

  /**
   * 
   * @ignore
   * 
   */
  hoje: Date = new Date(Date.now());

  /**
   * 
   * Lista onde os dias do agendamento serão armazenados
   * 
   */
  diasAgendados: Date[] = []

  /**
   * 
   * Configuração do modal
   * 
   */
  modalSimples = {
    titulo: "",
    mensagem: "",
    redirecionador: "",
    agendamento: {
      nomeResponsavel: "",
      nomeTurma: "",
      id_agendamento: 0
    }
  }

  /**
   * 
   * Injeta o objeto do tipo [FormBuilder] para geração do formulário
   * 
   * Injeta o objeto do tipo [ActivatedRoute] para obtenção dos parâmetros na rota
   * 
   * Injeta o objeto do tipo [SalasService] para manipulação das requisições da API
   * 
   * Injeta o objeto do tipo [AgendamentosService] para manipulação das requisições da API
   * 
   * Gera o formulário assim que executado
   * 
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _activateRoute: ActivatedRoute,
    private _salasService: SalasService,
    private _agendamentosService: AgendamentosService
    ) {
    this.gerarFormulario();
   }

   /**
   * 
   * Ao iniciar obtem os dias agendados e as informações da sala
   * 
   */
  ngOnInit() {
    this.calendario.hasHeader = false;
    this.calendario.specialDates = [{ type: DateRangeType.Specific, dateRange: this.diasAgendados}];

    this._activateRoute.params.subscribe( parametros => {
      if (parametros['id']) {
        this._salasService.get(parametros['id']).subscribe(resp => {
          this.sala = new Sala(resp.nome, resp.descricao, resp.id, resp.disponibilidade);
          this.obterAgendamentos(parametros['id']);
        });
      }
    });
  }

  /* Formulario */

  /**
   * 
   * Gera o formulário
   * 
   */
  gerarFormulario() {
    this.formGroup = this._formBuilder.group({
      nomeResponsavel: ['', Validators.required],
      nomeTurma: ['', Validators.required]
    });
  }

  /**
   * 
   * Limpa os campos do formulário
   * 
   */
  limparFormulario() {
    this.formGroup.patchValue({nomeResponsavel: ""});
    this.formGroup.patchValue({nomeTurma: ""})
  }

  /**
   * 
   * Obtem os campos do formulário
   * @returns {Object} campos do formulário
   */
  get form() { return this.formGroup.controls; }

  /**
   * 
   * Executado ao enviar o formulário
   * 
   * Faz as validações de campos e calendario e envia os dados para a API
   * 
   */
  onSubmit() {
    this.enviado = true;

    if (this.formGroup.invalid) {
      return false;
    }

    if (this.calendario.selectedDates.length === 0)  {
      this.abrirModalSimples("mensagem", "Selecione os dias", "Selecione os dias que deseja marcar o agendamento");
      return false;
    }

    let agendamentos = []
    this.calendario.selectedDates.map(dataSelecionada => {
      agendamentos.push(
        new Agendamento(
          this.formGroup.get('nomeResponsavel').value,
          this.formGroup.get('nomeTurma').value,
          dataSelecionada,
          this.sala.id
        )
      )
    })

    this.adicionarAgendamento(agendamentos);
    this.limparFormulario();
    this.alternarFormulario();
  }

  /* Requisições */

  /**
   * 
   * Exclui a sala com base no [id]
   * 
   * @param {number} id id da sala a ser excluida
   * 
   * 
   */
  excluirSala(id: number) {
    this.fecharModal("exluirSala");
    this._salasService.delete(id).subscribe(resp => {
      this.abrirModalSimples("mensagem", "Sucesso", "A sala foi excluída com sucesso", "/listar-salas");
    },
    erro => {
      this.abrirModalSimples("mensagem", "Não foi possível excluir a sala", "Houve um erro ao excluir a sala. Pedimos desculpas pelo transtorno");
    })
  }

  /**
   * 
   * Obtem uma coleção de agendamentos através da API
   * 
   * Obtem os dias agendados
   * 
   * @param {number} id_sala Identificador da sala
   * 
   */
  obterAgendamentos(id_sala: number) {
    this._agendamentosService.getPorSala(id_sala).subscribe(resp => {
      resp.map(agendamento => {
        this.agendamentos.push(new Agendamento(agendamento.nomeResponsavel, agendamento.nomeTurma, new Date(agendamento.data), agendamento.id_sala, agendamento.id))
        this.diasAgendados.push(new Date(agendamento.data));
      })
    })
  }

  /**
   * 
   * Adiciona uma coleção de agendamentos através da API
   * 
   * Atualiza os dias agendados
   * 
   * @param {Agendamento[]} agendamento Lista de agendamentos
   * 
   */
  adicionarAgendamento(agendamento: Agendamento[]) {
    this._agendamentosService.postArray(agendamento).subscribe(resp => {
      this.abrirModalSimples("mensagem", "Sucesso", "Agendamento efetuado com sucesso");
      this.obterAgendamentos(this.sala.id);
      this.atualizarDiaAgendado();
      this.calendario.deselectDate();
    },
    erro => {
      this.abrirModalSimples("mensagem", "Não foi possível efetuar o agendamento", "Houve ao agendar esse dia. Pedimos desculpas pelo transtorno");
    });
  }

  /**
   *
   * Exclui um agendamento com base no seu [id]
   *  
   * @param {number} id Identificador do agendamento
   *
   * 
   */

  excluirAgendamento(id: number) {
    this._agendamentosService.delete(id).subscribe(resp => {
      this.abrirModalSimples("mensagem", "Sucesso", "O agendamento foi excluído com sucesso");
      this.removerDataAgendada(this.obterAgendamentoPorId(id).data);
    },
    erro => {
      this.abrirModalSimples("mensagem", "Não foi possível excluir o agendamento", "Houve um erro ao excluir o agendamento. Pedimos desculpas pelo transtorno");
    })
  }

  /* Calendario */

  /**
   * 
   * Lê as informações do componente [Calendario]
   * 
   */
  @ViewChild("calendario", { read: IgxCalendarComponent, static: true }) public calendario: IgxCalendarComponent;


  /**
   *
   * Obtem um agendamento com base na [data]
   *  
   * @param {Date} data data a ser obtida
   * @returns {Agendamento} retorna um agendamento
   *
   * 
   */
  obterAgendamentoPorData(data: Date) {
    let agendamentoCompleto = this.agendamentos.filter(agendamento => {
      return agendamento.data.getTime() === data.getTime() ? agendamento : '';
    })

    return agendamentoCompleto[0];
  }

    /**
   * 
   * Obtem um agendamento com base no [id]
   * 
   * @param {number} id id a ser obtido
   * @returns {Agendamento} retorna um agendamento
   * 
   * 
   */
  obterAgendamentoPorId(id: number) {
    let agendamentoCompleto = this.agendamentos.filter(agendamento => {
      return agendamento.id === id ? agendamento : '';
    })

    return agendamentoCompleto[0];
  }

  /**
   * 
   * Remove o dia agendado do calendário
   * 
   * @param {Date} data Data a ser removida
   * 
   * 
   */
  removerDataAgendada(data: Date) {
    let datas = this.diasAgendados.filter(dia => {
      return dia.getTime() !== data.getTime() ? dia: '';
    });
    this.atualizarDiaAgendado(datas);
  }

  /**
   * 
   * Atualiza os dias agendados do calendario
   * 
   * @param {Date[]} datas (Opcional) Datas a serem adicionadas ao calendário
   * 
   */

  atualizarDiaAgendado(datas?: Date[]) {
    datas ? this.diasAgendados = datas : '';
    this.calendario.specialDates = [{ type: DateRangeType.Specific, dateRange: this.diasAgendados}];
  }

  /**
   * 
   * Alterna a exibição do formulário.
   * 
   */
  alternarFormulario() {
    this.formulario = !this.formulario;
    this.enviado = false;
    this.alternarCalendario();
    this.alternarDiasDesabilitados();
  }

  /**
   * 
   * Alterna o tipo do calendario entre 'multi' e 'single'
   * 
   */
  alternarCalendario() {
    if (this.formulario) {
      this.tipoFormulario = 'multi';
    } else {
      this.tipoFormulario = 'single';
    }
  }


  /**
   * 
   * Alterna entre deseabilitar os dias anteriores ao dia atual e exibir todos os dias
   * 
   */
  alternarDiasDesabilitados() {
    if (this.formulario) {
      this.calendario.disabledDates = [{ type: DateRangeType.Before, dateRange: [new Date()]}];
    } else {
      this.calendario.disabledDates = [];
    }
  }

  /**
   * 
   * Verifica se a data seleciona é um dia agendado e exibe um modal com as informações do agendamento
   * 
   * @param {Date | Date[]} datas Data(s) selecionadas no calendario
   * 
   * 
   */
  dataSelecionada(datas: Date | Date[]) {
      this.calendario.specialDates[0].dateRange.map((data) => {
        if (Array.isArray(datas)) {
          datas.map((dataSelecionada) => {
            if (data.getTime() === dataSelecionada.getTime()) {
              this.calendario.deselectDate();
              let agendamento = this.obterAgendamentoPorData(data);
              this.abrirModalSimples(
                "descricaoAgendamento", 
                (agendamento.data.getDate().toString() + '/' +(agendamento.data.getMonth() + 1).toString() + '/' + agendamento.data.getFullYear().toString()),
                "",
                "",
                agendamento.nomeResponsavel,
                agendamento.nomeTurma,
                agendamento.id
                );
            }
          })
        } else {
          if (datas.getTime() === data.getTime()) {
            let agendamento = this.obterAgendamentoPorData(datas);
            this.abrirModalSimples(
              "descricaoAgendamento", 
              (agendamento.data.getDate().toString() + '/' +(agendamento.data.getMonth() + 1).toString() + '/' + agendamento.data.getFullYear().toString()),
              "",
              "",
              agendamento.nomeResponsavel,
              agendamento.nomeTurma,
              agendamento.id
              );
          }
        }
      })
    }

  /* Modal */

  /**
   * 
   * Abre o modal com as informações informadas
   * 
   * @param {string} nomeModal Nome do modal a ser aberto
   * @param {string} titulo Titulo do modal
   * @param {string} mensagem Mensagem do corpo do modal
   * @param {string} redirecionador Link para redirecionamento após fechar o modal
   * @param {string} nomeResponsavel Nome do responsável pelo agendamento (apenas modal de agendamento)
   * @param {string} nomeTurma Nome da turma responsável pelo agendamento (apenas modal de agendamento)
   * @param {string} id_agendamento Identificador do agendamento para as operações
   * 
   * 
   */
  abrirModalSimples(nomeModal: string, titulo: string, mensagem: string, redirecionador: string = "", nomeResponsavel: string = "", nomeTurma: string = "", id_agendamento: number = 0) {
    this.modalSimples.titulo = titulo;
    this.modalSimples.mensagem = mensagem;
    this.modalSimples.redirecionador = redirecionador;
    this.modalSimples.agendamento.nomeResponsavel = nomeResponsavel;
    this.modalSimples.agendamento.nomeTurma = nomeTurma;
    this.modalSimples.agendamento.id_agendamento = id_agendamento;
    $('#' + nomeModal).modal('show');
  }

  /**
   * 
   * Fecha o modal
   * 
   * @param {string} nomeModal Nome do modal a ser fechado
   * 
   * 
   */
  fecharModal(nomeModal: string) {
    $(('#' + nomeModal)).modal('hide');
  }

    /**
   * 
   * 
   * Icone de editar
   * 
   */
  faEdit = faEdit;

    /**
   * 
   * 
   * Icone de lixeira
   * 
   */
  faTrashAlt = faTrashAlt;

  /**
   * 
   * 
   * Icone de adição
   * 
   */
  faPlus = faPlus;

}
