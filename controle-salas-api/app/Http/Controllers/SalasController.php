<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Salas;

use App\Shared\Mensagem;

use DateTime;

use Illuminate\Database\QueryException;

class SalasController extends Controller
{
    
    private $_salas;

    public function __construct(Salas $salas) {
        $this->_salas = $salas;
    }

    /**
     * @apiDefine Request Erro Request
     */

    /**
     * @apiDefine Sucesso201 Sucesso 201
     */

    /**
     * @apiDefine Sucesso200 Sucesso 200
     */


    /**
     * @apiDefine Erro400 Erro 4xx
     */

    /**
    * @api {get} /salas/ Retorna a lista de salas
    * @apiName Listar Salas
    * @apiGroup Salas
    * @apiUse Request
    * @apiUse Sucesso200
    * @apiSuccess (Sucesso200) {Object[]} salas Lista de salas
    * @apiSuccess (Sucesso200) {Number} salas.id Identificador da sala
    * @apiSuccess (Sucesso200) {String} salas.nome Nome da sala
    * @apiSuccess (Sucesso200) {String} salas.descricao Descrição da sala
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 200 OK
    *   [
    *       {
    *          "id": 3,
    *          "nome": "Noma da sala",
    *          "descricao": "descricao da sala"
    *       },
    *       {
    *           "id": 4,
    *           "nome": "Noma da sala 2",
    *           "descricao": "descricao da sala 2"
    *       }
    *   ]
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiDescription Retorna uma lista com todas as salas cadastradas
    */

    function list(Request $request) {

        $nome = $request->input('nome', "");
        $disponibilidade = $request->input('disponibilidade', "");

        try {
            $salas = $this->_salas
            ->select('*',
                \DB::raw("IF((select data from Agendamentos where data = CURRENT_DATE and id_sala = Salas.id ), 'Indisponivel', 'Disponivel') as disponibilidade"))
                ->where('nome', 'like', "$nome%")             
                ->orderBy('nome', 'ASC')
                ->get();
            return response()->json($salas, 200, [], JSON_UNESCAPED_UNICODE);
        } 
        catch( QueryException $qe) {
            if ($qe->getCode() === "2002") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel conectar ao banco de dados', 500);
            }
            return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel realizar a operação. Código de erro: ' . $qe->getMessage(), 500);
        }
        catch(\Throwable $th) {
            return Mensagem::MensagemJson(strval($th->getCode()), 'Ocorreu algum erro com a operação. Código de erro: ' . $th->getMessage()(), 500);
        }
    }

    /**
    * @api {get} /salas/:id Retorna o registro de uma sala
    * @apiParam {Number} id Identificador da sala
    * @apiName Obter Sala
    * @apiGroup Salas
    * @apiUse Request
    * @apiUse Sucesso200
    * @apiSuccess (Sucesso200) {Object} salas Objeto do tipo sala
    * @apiSuccess (Sucesso200) {Number} salas.id Identificador da sala
    * @apiSuccess (Sucesso200) {String} salas.nome Nome da sala
    * @apiSuccess (Sucesso200) {String} salas.descricao Descrição da sala
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 200 OK
    *       {
    *          "id": 3,
    *          "nome": "Noma da sala",
    *          "descricao": "descricao da sala"
    *       }
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiDescription Retorna os dados de uma sala
    */


    function get($id) {

        try {
            $salas = $this->_salas->where('id', '=', $id)->get();
            return response()->json($salas[0], 200, [], JSON_UNESCAPED_UNICODE);
        } catch( QueryException $qe) {
            if ($qe->getCode() === "2002") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel conectar ao banco de dados', 500);
            }
            return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel realizar a operação. Código de erro: ' . $qe->getCode(), 500);
        }
        catch(\Throwable $th) {
            return Mensagem::MensagemJson(strval($th->getCode()), 'Ocorreu algum erro com a operação. Código de erro: ' . $th->getCode(), 500);
        }

    }

    /**
    * @api {post} /salas/ Adiciona uma sala nova
    * @apiName Adicionar Sala
    * @apiGroup Salas
    * @apiUse Sucesso201
    * @apiUse Request
    * @apiUse Erro400
    * @apiSuccess (Sucesso201) {Object} salas Objeto do tipo sala
    * @apiSuccess (Sucesso201) {Number} salas.id Identificador da sala
    * @apiSuccess (Sucesso201) {String} salas.nome Nome da sala
    * @apiSuccess (Sucesso201) {String} salas.descricao Descrição da sala
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 201 OK
    *       {
    *          "id": 3,
    *          "nome": "Noma da sala",
    *          "descricao": "descricao da sala"
    *       }
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiError (Request) HY000 Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios
    * @apiError (Request) 22001 Um dos campos excedeu o limite de caracteres
    * @apiError (Erro400) 400 Dados não especificados
    * @apiDescription Adiciona uma nova sala ao conjunto de salas
    */

    function post (Request $request) {
        $dados = $request->input('dados');

        if (empty($dados) || !isset($dados)) {
            return Mensagem::MensagemJson(400, "Dados não especificados", 400);
        }

        try {
            $salas = $this->_salas->fill($dados);
            $salas->save();
            return response()->json($salas, 201, [], JSON_UNESCAPED_UNICODE);
        } catch(QueryException $qe) {

            if ($qe->getCode() === "2002") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel conectar ao banco de dados', 500);
            }

            if ($qe->getCode() === "HY000") {
                return Mensagem::MensagemJson(400, 'Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios', 400);
            }

            if ($qe->getCode() === "22001") {
                return Mensagem::MensagemJson(400, 'Um dos campos excedeu o limite de caracteres', 400);
            }

            return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel realizar a operação. Código de erro: ' . $qe->getCode(), 500);
        }
        catch(\Throwable $th) {
            return Mensagem::MensagemJson(strval($th->getCode()), 'Ocorreu algum erro com a operação. Código de erro: ' . $th->getCode(), 500);
        }

    }

    /**
    * @api {put} /salas/:id Atualiza uma sala nova
    * @apiParam {Number} id Identificador da sala
    * @apiName Atualizar Sala
    * @apiGroup Salas
    * @apiUse Sucesso200
    * @apiUse Request
    * @apiUse Erro400
    * @apiSuccess (Sucesso200) {Object} salas Objeto do tipo sala
    * @apiSuccess (Sucesso200) {Number} salas.id Identificador da sala
    * @apiSuccess (Sucesso200) {String} salas.nome Nome da sala
    * @apiSuccess (Sucesso200) {String} salas.descricao Descrição da sala
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 200 OK
    *       {
    *          "id": 3,
    *          "nome": "Noma da sala 02",
    *          "descricao": "descricao sobre a sala"
    *       }
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiError (Request) HY000 Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios
    * @apiError (Request) 22001 Um dos campos excedeu o limite de caracteres
    * @apiError (Erro400) 400 Dados não especificados
    * @apiDescription Atualiza uma sala existente ao conjunto de salas
    */

    function put (Request $request, $id) {

        $dados = $request->input('dados');
        
        if (empty($dados) && !isset($dados)) {
            return Mensagem::MensagemJson(400, "Dados não especificados", 400);
        }

        $status_code = 200;
        try {
            $salas = $this->_salas->find($id);
            if (is_null($salas) ) {
                $status_code = 201;
                $salas = $this->_salas->fill($dados);
                $salas->id = $id;
            } else {
                $salas->fill($dados);
            }
            $salas->save();
            return response()->json($salas, $status_code, [], JSON_UNESCAPED_UNICODE);
        } catch(QueryException $qe) {

            if ($qe->getCode() === "2002") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel conectar ao banco de dados', 500);
            }

            if ($qe->getCode() === "HY000") {
                return Mensagem::MensagemJson(400, 'Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios', 400);
            }

            if ($qe->getCode() === "22001") {
                return Mensagem::MensagemJson(400, 'Um dos campos excedeu o limite de caracteres', 400);
            }

            return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel realizar a operação. Código de erro: ' . $qe->getCode(), 500);
        } catch(\Throwable $th) {
            return Mensagem::MensagemJson(strval($th->getCode()), 'Ocorreu algum erro com a operação. Código de erro: ' . $th->getCode(), 500);
        }
    }

    /**
    * @api {delete} /salas/:id Deleta uma sala nova
    * @apiParam {Number} id Identificador da sala
    * @apiName Deletar Sala
    * @apiGroup Salas
    * @apiUse Sucesso200
    * @apiUse Request
    * @apiUse Erro400
    * @apiSuccess (Sucesso200) {Object} mensagem Objeto do tipo mensagem
    * @apiSuccess (Sucesso200) {Number} salas.codigo Identificador da mensagem
    * @apiSuccess (Sucesso200) {String} salas.mensagem Descrição da mensagem
    * @apiSuccess (Sucesso200) {number} salas.status_code Código do resultado da requição
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 200 OK
    *   {
    *       "codigo": 200,
    *       "mensagem": "Sala deletada com sucesso!",
    *       "status_Code": 200
    *   }
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiError (Erro400) 400 Sala não encontrada
    * @apiDescription Atualiza uma sala existente ao conjunto de salas
    */

    public function delete ($id) {

        $salas = $this->_salas->find($id);
        if (is_null($salas)) {
            return Mensagem::MensagemJson(400, "Sala não encontrada", 400);
        }

        try {
            $salas->delete();
            return Mensagem::MensagemJson(200, 'Sala deletada com sucesso!', 200);
        } catch(QueryException $qe) {

            if ($qe->getCode() === "2002") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel conectar ao banco de dados', 500);
            }

            return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel realizar a operação. Código de erro: ' . $qe->getMessage(), 500);

        } catch (\Throwable $th) {
            return Mensagem::MensagemJson(strval($th->getCode()), 'Ocorreu algum erro com a operação. Código de erro: ' . $th->getCode(), 500);
        }
    }
}
