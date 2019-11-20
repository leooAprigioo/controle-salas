import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

  /**
   *
   * Variavel para utilização do Jquery
   * 
   */
declare var $ : any;

/**
 * 
 * Componente que fornece a estrutura de um modal simples
 * 
 */
@Component({
  selector: 'app-modal-simples',
  templateUrl: './modal-simples.component.html',
  styleUrls: ['./modal-simples.component.css']
})
export class ModalSimplesComponent implements OnInit {

  /**
   * 
   * Titulo do modal
   * 
   */
  @Input() titulo: string =  "";

  /**
   * 
   * Mensagem do modal
   * 
   */
  @Input() mensagem: string =  "";

  /**
   * 
   * Link que será redirecionado após o botão ser clicado
   * 
   */
  @Input() redirecionador: string = "";

  /**
   * 
   * Injeta um objeto do tipo [Router] para navegação entre as rotas
   * 
   */
  constructor(
    private _router: Router
  ) { }

  /**
   * 
   * @ignore
   * 
   */
  ngOnInit() {
  }

  /**
   * 
   * Verifica se há link para redirecionar ao fechar o modal
   * 
   */
  fecharModal() {
    if (this.redirecionador !== "") {
      this._router.navigate([this.redirecionador]);
    }
    
  }

}
