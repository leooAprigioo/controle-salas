import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SalasService } from '../services/sala/salas.service';
import { Sala } from '../models/Sala';

import { ActivatedRoute } from '@angular/router';

  /**
   *
   * Variavel para utilização do Jquery
   * 
   */
declare var $ : any;

  /**
   *
   * Componente do formulário de inserção de salas
   * 
   */

@Component({
  selector: 'app-formulario-sala',
  templateUrl: './formulario-sala.component.html',
  styleUrls: ['./formulario-sala.component.css']
})
export class FormularioSalaComponent implements OnInit {

  /**
   *
   * Grupo onde os campos do formulário estarão armazenados
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
   * Objeto onde as informações da sala serão armazenadas em caso de atualização
   * 
   */
  sala: Sala;

  /**
   *
   * Operação que o formulário irá realizar
   * 
   */
  operacao: string = "post";


  /**
   *
   * Configuração do modal
   * 
   */
  modal = {
    titulo: "",
    mensagem: "",
  }

  /**
   *
   * Injeta um objeto do tipo [FormBuilder] para geração do formulário
   * 
   * Injeta um objeto do tipo [SalasService] para manipular as requisições na API
   * 
   * Injeta um objeto do tipo [ActivatedRoute] para manipular as rotas
   * 
   * Gera o formulário
   * 
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _salasService: SalasService,
    private _activatedRoute: ActivatedRoute
    ) { 
    this.gerarFormulario();
  }

  /**
   *
   * Verifica se há parametros nas rotas e preenche os campos com os novos valores
   * 
   */
  ngOnInit() {
    this._activatedRoute.params.subscribe( parametros => {
      if (parametros['operacao']) {
        this.operacao = parametros["operacao"];
      }
    });

    this._activatedRoute.queryParams.subscribe(parametros => {
      if (Object.keys(parametros).length > 0) {
        this.formGroup.patchValue({nome: parametros["nome"]});
        this.formGroup.patchValue({descricao: parametros["descricao"]});
        this.sala = new Sala(parametros["nome"], parametros["descricao"], parametros["id"]);
      }
    })
  }

  /**
   *
   * Limpa os campos do formulário
   * 
   */
  limparFormulario() {
    this.formGroup.patchValue({nome: ""});
    this.formGroup.patchValue({descricao: ""})
    this.enviado = false;
  }

  /**
   *
   * Gera o formulário
   * 
   */
  gerarFormulario() {
    this.formGroup = this._formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['']
    });
  }

  /**
   *
   * Obtem os campos do formulário
   * 
   * @returns {Object} Campos do formulário
   * 
   */
  get form() { return this.formGroup.controls; }


  /**
   *
   * Envia os dados para inserção na API
   * 
   * @param {Sala} sala Informações da sala a ser inserida
   * 
   */
  postSala(sala: Sala) {
    this._salasService.post(sala).subscribe(resp => {
      this.abrirModal('Sucesso', 'A sala foi cadastrada com sucesso');
    },
    error => {
      this.abrirModal('Não foi possível cadastrar a sala', 'Não foi possível cadastrar a sala. Pedimos desculpas pelo transtorno.');
    });
  }


  /**
   *
   * Envia os dados para atualização na API
   * 
   * @param {number} id Identificador da sala a ser atualizada
   * @param {Sala} sala Informações da sala
   * 
   */
  putSala(id: number, sala: Sala) {
    this._salasService.put(id, sala).subscribe(resp => {
      this.abrirModal('Sucesso', 'A sala foi atualizada com sucesso');
    },
    error => {
      this.abrirModal('Não foi possível atualizar a sala', 'Não foi possível atualizar a sala. Pedimos desculpas pelo transtorno.');
    });
  }

  /**
   *
   * Valida o formulário ao ser enviado e realiza a operação correspondente
   * 
   */
  onSubmit() {
    this.enviado = true;

    if (this.formGroup.invalid) {
      return false;
    }

    let sala: Sala = new Sala(
      this.formGroup.get('nome').value, 
      this.formGroup.get('descricao').value
      );

    if (this.operacao === "post" ) {
      this.postSala(sala);
      this.limparFormulario();
    } else if (this.operacao === "put") {
      this.putSala(this.sala.id, sala)
    }
  }

  /**
   *
   * Abre o modal
   * 
   * @param {string} titulo Titulo do modal
   * @param {string} mensagem Mensagem do corpo no modal
   * 
   */

  abrirModal(titulo: string, mensagem: string) {
    this.modal.titulo = titulo;
    this.modal.mensagem = mensagem;
    $('#mensagem').modal('show');
  }

}
