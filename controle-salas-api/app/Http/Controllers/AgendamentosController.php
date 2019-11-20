<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Agendamentos;

use App\Shared\Mensagem;

use Illuminate\Database\QueryException;

class AgendamentosController extends Controller
{
    private $_agendamentos;

    public function __construct(Agendamentos $agendamentos) {
        $this->_agendamentos = $agendamentos;
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
    * @api {get} /agendamentos/ Retorna a lista de todos os agendamentos
    * @apiName Listar Agendamentos
    * @apiGroup Agendamentos
    * @apiUse Request
    * @apiUse Sucesso200
    * @apiSuccess (Sucesso200) {Object[]} agendamentos Lista de todos os agendamentos
    * @apiSuccess (Sucesso200) {Number} agendamentos.id Identificador do agendamento
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeResponsavel Nome do responsável que agendou o dia
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeTurma Nome da turma que irá utilizar a sala
    * @apiSuccess (Sucesso200) {String} agendamentos.data Data em que a sala irá ser utilizada
    * @apiSuccess (Sucesso200) {String} agendamentos.id_sala Identificador da sala que será utilizada
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 200 OK
    * [
    *     {
    *         "id": 4,
    *         "nomeResponsavel": "Nome do responsavel",
    *         "nomeTurma": "Nome da turma",
    *         "data": "2019-11-18 00:00:00",
    *         "id_sala": 2
    *     }
    * ]
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiDescription Retorna uma lista com todos os agendamentos cadastrados
    */

    function list() {
        try {
            $agendamentos = $this->_agendamentos->get();
            return response()->json($agendamentos, 200, [], JSON_UNESCAPED_UNICODE);
        } 
        catch( QueryException $qe) {
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
    * @api {get} /agendamentos/:id Retorna o registro de um agendamento
    * @apiParam {Number} id Identificador do agendamento.
    * @apiName Obter Sala
    * @apiGroup Agendamentos
    * @apiUse Request
    * @apiUse Sucesso200
    * @apiSuccess (Sucesso200) {Object[]} agendamentos Lista de todos os agendamentos
    * @apiSuccess (Sucesso200) {Number} agendamentos.id Identificador do agendamento
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeResponsavel Nome do responsável que agendou o dia
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeTurma Nome da turma que irá utilizar a sala
    * @apiSuccess (Sucesso200) {String} agendamentos.data Data em que a sala irá ser utilizada
    * @apiSuccess (Sucesso200) {String} agendamentos.id_sala Identificador da sala que será utilizada
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 200 OK
    *     {
    *         "id": 4,
    *         "nomeResponsavel": "Nome do responsavel",
    *         "nomeTurma": "Nome da turma",
    *         "data": "2019-11-18 00:00:00",
    *         "id_sala": 2
    *     }
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiDescription Retorna os dados de um agendamento
    */

    function get($id) {

        try {
            $agendamentos = $this->_agendamentos->where('id', '=', $id)->get();
            return response()->json($agendamentos, 200, [], JSON_UNESCAPED_UNICODE);
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
    * @api {get} /agendamentos/sala/:id Retorna o registro de um agendamento pelo id da sala
    * @apiParam {Number} id Identificador da sala.
    * @apiName Obter Sala
    * @apiGroup Agendamentos
    * @apiUse Request
    * @apiUse Sucesso200
    * @apiSuccess (Sucesso200) {Object[]} agendamentos Lista de todos os agendamentos
    * @apiSuccess (Sucesso200) {Number} agendamentos.id Identificador do agendamento
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeResponsavel Nome do responsável que agendou o dia
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeTurma Nome da turma que irá utilizar a sala
    * @apiSuccess (Sucesso200) {String} agendamentos.data Data em que a sala irá ser utilizada
    * @apiSuccess (Sucesso200) {String} agendamentos.id_sala Identificador da sala que será utilizada
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 200 OK
    *     {
    *         "id": 4,
    *         "nomeResponsavel": "Nome do responsavel",
    *         "nomeTurma": "Nome da turma",
    *         "data": "2019-11-18 00:00:00",
    *         "id_sala": 2
    *     }
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiDescription Retorna os dados de um agendamento
    */

    function getPorSala($id) {

        try {
            $agendamentos = $this->_agendamentos->where('id_sala', '=', $id)->get();
            return response()->json($agendamentos, 200, [], JSON_UNESCAPED_UNICODE);
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
    * @api {post} /agendamentos/ Adiciona um agendamento novo
    * @apiName Adicionar Agendamento
    * @apiGroup Agendamentos
    * @apiUse Sucesso201
    * @apiUse Request
    * @apiUse Erro400
    * @apiSuccess (Sucesso201) {Object[]} agendamentos Lista de todos os agendamentos
    * @apiSuccess (Sucesso201) {Number} agendamentos.id Identificador do agendamento
    * @apiSuccess (Sucesso201) {String} agendamentos.nomeResponsavel Nome do responsável que agendou o dia
    * @apiSuccess (Sucesso201) {String} agendamentos.nomeTurma Nome da turma que irá utilizar a sala
    * @apiSuccess (Sucesso201) {String} agendamentos.data Data em que a sala irá ser utilizada
    * @apiSuccess (Sucesso201) {String} agendamentos.id_sala Identificador da sala que será utilizada
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 201 OK
    * {
    *     "nomeResponsavel": "Nome do responsavel",
    *     "nomeTurma": "Nome da turma",
    *     "data": "2019-11-18 00:00:00",
    *     "id_sala": 2,
    *     "id": 4
    * }
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiError (Request) 23000 O valor da chave estrangeira não corresponde a nenhuma ocorrencia em [Sala] ou há um campo não-nulo com valor nulo
    * @apiError (Request) HY000 Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios
    * @apiError (Request) 22001 Um dos campos excedeu o limite de caracteres
    * @apiError (Erro400) 400 Dados não especificados
    * @apiDescription Adiciona um novo agendamento ao conjunto de agendamentos
    */

    function post (Request $request) {
        $dados = $request->input('dados');

        if (empty($dados) || !isset($dados)) {
            return Mensagem::MensagemJson(400, "Dados não especificados", 400);
        }

        try {
            $agendamentos = $this->_agendamentos->fill($dados);
            $agendamentos->save();
            return response()->json($agendamentos, 201, [], JSON_UNESCAPED_UNICODE);
        } catch(QueryException $qe) {

            if ($qe->getCode() === "2002") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel conectar ao banco de dados', 500);
            }

            if ($qe->getCode() === "23000") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'O valor da chave estrangeira não corresponde a nenhuma ocorrencia em [Sala] ou há um campo não-nulo com valor nulo', 400);
            }

            if ($qe->getCode() === "HY000") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios', 400);
            }

            if ($qe->getCode() === "22001") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Um dos campos excedeu o limite de caracteres', 400);
            }

            return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel realizar a operação. Código de erro: ' . $qe->getCode(), 500);
        }
        catch(\Throwable $th) {
            return Mensagem::MensagemJson(strval($th->getCode()), 'Ocorreu algum erro com a operação. Código de erro: ' . $th->getCode(), 500);
        }

    }

    /**
    * @api {post} /agendamentos/ Adiciona vários agendamentos novos
    * @apiName Adicionar Agendamentos 
    * @apiGroup Agendamentos
    * @apiUse Sucesso201
    * @apiUse Request
    * @apiUse Erro400
    * @apiSuccess (Sucesso201) {Object[]} agendamentos Lista de todos os agendamentos
    * @apiSuccess (Sucesso201) {Number} agendamentos.id Identificador do agendamento
    * @apiSuccess (Sucesso201) {String} agendamentos.nomeResponsavel Nome do responsável que agendou o dia
    * @apiSuccess (Sucesso201) {String} agendamentos.nomeTurma Nome da turma que irá utilizar a sala
    * @apiSuccess (Sucesso201) {String} agendamentos.data Data em que a sala irá ser utilizada
    * @apiSuccess (Sucesso201) {String} agendamentos.id_sala Identificador da sala que será utilizada
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 201 OK
    * [
    *  {
    *     "nomeResponsavel": "Nome do responsavel",
    *     "nomeTurma": "Nome da turma",
    *     "data": "2019-11-18 00:00:00",
    *     "id_sala": 2,
    *     "id": 4
    *   },
    *   {
    *       "nomeResponsavel": "Nome do responsavel",
    *       "nomeTurma": "Nome da turma",
    *       "data": "2019-11-19 00:00:00",
    *       "id_sala": 2,
    *       "id": 4
    *   }
    * ]
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiError (Request) 23000 O valor da chave estrangeira não corresponde a nenhuma ocorrencia em [Sala] ou há um campo não-nulo com valor nulo
    * @apiError (Request) HY000 Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios
    * @apiError (Request) 22001 Um dos campos excedeu o limite de caracteres
    * @apiError (Erro400) 400 Dados não especificados
    * @apiError (Erro400) 400 Dados insuficientes para completar a operação
    * @apiDescription Adiciona um novo agendamento ao conjunto de agendamentos
    */

    function postArray (Request $request) {
        $dados = $request->input('dados');
        if (count($dados) < 1) {
            return Mensagem::MensagemJson(400, "Dados insuficientes para completar a operação", 400);
        }

        if (empty($dados) || !isset($dados)) {
            return Mensagem::MensagemJson(400, "Dados não especificados", 400);
        }

        try {
            $count = 0;
            foreach ($dados as $dado) {
                $this->_agendamentos->create($dado);
            }
            return response()->json($dados, 201, [], JSON_UNESCAPED_UNICODE);
        } catch(QueryException $qe) {

            if ($qe->getCode() === "2002") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel conectar ao banco de dados', 500);
            }

            if ($qe->getCode() === "23000") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'O valor da chave estrangeira não corresponde a nenhuma ocorrencia em [Sala] ou há um campo não-nulo com valor nulo', 400);
            }

            if ($qe->getCode() === "HY000") {
                return Mensagem::MensagemJson(strval($qe->getMessage()), 'Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios', 400);
            }

            if ($qe->getCode() === "22001") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Um dos campos excedeu o limite de caracteres', 400);
            }

            return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel realizar a operação. Código de erro: ' . $qe->getCode(), 500);
        }
        catch(\Throwable $th) {
            return Mensagem::MensagemJson(strval($th->getCode()), 'Ocorreu algum erro com a operação. Código de erro: ' . $th->getMessage(), 500);
        }

    }

    /**
    * @api {put} /agendamentos/:id Atualiza um agendamento novo
    * @apiParam {Number} id Identificador do agendamento.
    * @apiName Atualizar Agendamento
    * @apiGroup Agendamentos
    * @apiUse Sucesso200
    * @apiUse Request
    * @apiUse Erro400
    * @apiSuccess (Sucesso200) {Object[]} agendamentos Lista de todos os agendamentos
    * @apiSuccess (Sucesso200) {Number} agendamentos.id Identificador do agendamento
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeResponsavel Nome do responsável que agendou o dia
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeTurma Nome da turma que irá utilizar a sala
    * @apiSuccess (Sucesso200) {String} agendamentos.data Data em que a sala irá ser utilizada
    * @apiSuccess (Sucesso200) {String} agendamentos.id_sala Identificador da sala que será utilizada
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 200 OK
    *     {
    *         "id": 4,
    *         "nomeResponsavel": "Nome do responsavel 02",
    *         "nomeTurma": "Nome da turma A",
    *         "data": "2019-11-19 00:00:00",
    *         "id_sala": 3
    *     }
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiError (Request) 23000 O valor da chave estrangeira não corresponde a nenhuma ocorrencia em [Sala] ou há um campo não-nulo com valor nulo
    * @apiError (Request) HY000 Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios
    * @apiError (Request) 22001 Um dos campos excedeu o limite de caracteres
    * @apiError (Erro400) 400 Dados não especificados
    * @apiDescription Atualiza um agendamento existente ao conjunto de agendamentos
    */

    function put (Request $request, $id) {

        $dados = $request->input('dados');
        
        if (empty($dados) && !isset($dados)) {
            return Mensagem::MensagemJson(1, "Dados não especificados", 400);
        }

        $status_code = 200;
        try {
            $agendamentos = $this->_agendamentos->find($id);
            if (is_null($agendamentos) ) {
                $status_code = 201;
                $agendamentos = $this->_agendamentos->fill($dados);
                $agendamentos->id = $id;
            } else {
                $agendamentos->fill($dados);
            }
            $agendamentos->save();
            return response()->json($agendamentos, $status_code, [], JSON_UNESCAPED_UNICODE);
        } catch(QueryException $qe) {

            if ($qe->getCode() === "2002") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel conectar ao banco de dados', 500);
            }

            if ($qe->getCode() === "23000") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'O valor da chave estrangeira não corresponde a nenhuma ocorrencia em [Sala] ou há um campo não-nulo com valor nulo', 400);
            }

            if ($qe->getCode() === "HY000") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios', 400);
            }

            if ($qe->getCode() === "22001") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Um dos campos excedeu o limite de caracteres', 400);
            }

            return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel realizar a operação. Código de erro: ' . $qe->getMessage(), 500);
        } catch(\Throwable $th) {
            return Mensagem::MensagemJson(strval($th->getCode()), 'Ocorreu algum erro com a operação. Código de erro: ' . $th->getCode(), 500);
        }
    }

    /**
    * @api {delete} /agendamentos/:id Deleta um agendamento existente
    * @apiParam {Number} id Identificador do agendamento.
    * @apiName Deletar Agendamento
    * @apiGroup Agendamentos
    * @apiUse Sucesso200
    * @apiUse Request
    * @apiUse Erro400
    * @apiSuccess (Sucesso200) {Object[]} agendamentos Lista de todos os agendamentos
    * @apiSuccess (Sucesso200) {Number} agendamentos.id Identificador do agendamento
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeResponsavel Nome do responsável que agendou o dia
    * @apiSuccess (Sucesso200) {String} agendamentos.nomeTurma Nome da turma que irá utilizar a sala
    * @apiSuccess (Sucesso200) {String} agendamentos.data Data em que a sala irá ser utilizada
    * @apiSuccess (Sucesso200) {String} agendamentos.id_sala Identificador da sala que será utilizada
    * @apiSuccessExample {json} Sucesso:
    *   HTTP/1.1 200 OK
    *   {
    *       "codigo": 200,
    *       "mensagem": "Agendamento deletado com sucesso!",
    *       "status_Code": 200
    *   }
    * @apiError (Request) 2002 Não foi possivel conectar ao banco de dados
    * @apiError (Erro400) 400 Agendamento não encontrado
    * @apiDescription Atualiza um agendamento existente ao conjunto de agendamentos
    */

    public function delete ($id) {

        $agendamentos = $this->_agendamentos->find($id);
        if (is_null($agendamentos)) {
            return Mensagem::MensagemJson(400, "Agendamento não encontrado", 400);
        }

        try {
            $agendamentos->delete();
            return Mensagem::MensagemJson(200, 'Agendamento deletado com sucesso!', 200);
        } catch(QueryException $qe) {

            if ($qe->getCode() === "2002") {
                return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel conectar ao banco de dados', 500);
            }

            return Mensagem::MensagemJson(strval($qe->getCode()), 'Não foi possivel realizar a operação. Código de erro: ' . $qe->getCode(), 500);

        } catch (\Throwable $th) {
            return Mensagem::MensagemJson(strval($th->getCode()), 'Ocorreu algum erro com a operação. Código de erro: ' . $th->getCode(), 500);
        }
    }
}
