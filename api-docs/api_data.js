define({ "api": [
  {
    "type": "post",
    "url": "/agendamentos/",
    "title": "Adiciona um agendamento novo",
    "name": "Adicionar_Agendamento",
    "group": "Agendamentos",
    "success": {
      "fields": {
        "Sucesso 201": [
          {
            "group": "Sucesso201",
            "type": "Object[]",
            "optional": false,
            "field": "agendamentos",
            "description": "<p>Lista de todos os agendamentos</p>"
          },
          {
            "group": "Sucesso201",
            "type": "Number",
            "optional": false,
            "field": "agendamentos.id",
            "description": "<p>Identificador do agendamento</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeResponsavel",
            "description": "<p>Nome do responsável que agendou o dia</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeTurma",
            "description": "<p>Nome da turma que irá utilizar a sala</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "agendamentos.data",
            "description": "<p>Data em que a sala irá ser utilizada</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "agendamentos.id_sala",
            "description": "<p>Identificador da sala que será utilizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "  HTTP/1.1 201 OK\n{\n    \"nomeResponsavel\": \"Nome do responsavel\",\n    \"nomeTurma\": \"Nome da turma\",\n    \"data\": \"2019-11-18 00:00:00\",\n    \"id_sala\": 2,\n    \"id\": 4\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "23000",
            "description": "<p>O valor da chave estrangeira não corresponde a nenhuma ocorrencia em [Sala] ou há um campo não-nulo com valor nulo</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "HY000",
            "description": "<p>Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "22001",
            "description": "<p>Um dos campos excedeu o limite de caracteres</p>"
          }
        ],
        "Erro 4xx": [
          {
            "group": "Erro400",
            "optional": false,
            "field": "400",
            "description": "<p>Dados não especificados</p>"
          }
        ]
      }
    },
    "description": "<p>Adiciona um novo agendamento ao conjunto de agendamentos</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/AgendamentosController.php",
    "groupTitle": "Agendamentos"
  },
  {
    "type": "post",
    "url": "/agendamentos/",
    "title": "Adiciona vários agendamentos novos",
    "name": "Adicionar_Agendamentos",
    "group": "Agendamentos",
    "success": {
      "fields": {
        "Sucesso 201": [
          {
            "group": "Sucesso201",
            "type": "Object[]",
            "optional": false,
            "field": "agendamentos",
            "description": "<p>Lista de todos os agendamentos</p>"
          },
          {
            "group": "Sucesso201",
            "type": "Number",
            "optional": false,
            "field": "agendamentos.id",
            "description": "<p>Identificador do agendamento</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeResponsavel",
            "description": "<p>Nome do responsável que agendou o dia</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeTurma",
            "description": "<p>Nome da turma que irá utilizar a sala</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "agendamentos.data",
            "description": "<p>Data em que a sala irá ser utilizada</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "agendamentos.id_sala",
            "description": "<p>Identificador da sala que será utilizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "  HTTP/1.1 201 OK\n[\n {\n    \"nomeResponsavel\": \"Nome do responsavel\",\n    \"nomeTurma\": \"Nome da turma\",\n    \"data\": \"2019-11-18 00:00:00\",\n    \"id_sala\": 2,\n    \"id\": 4\n  },\n  {\n      \"nomeResponsavel\": \"Nome do responsavel\",\n      \"nomeTurma\": \"Nome da turma\",\n      \"data\": \"2019-11-19 00:00:00\",\n      \"id_sala\": 2,\n      \"id\": 4\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "23000",
            "description": "<p>O valor da chave estrangeira não corresponde a nenhuma ocorrencia em [Sala] ou há um campo não-nulo com valor nulo</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "HY000",
            "description": "<p>Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "22001",
            "description": "<p>Um dos campos excedeu o limite de caracteres</p>"
          }
        ],
        "Erro 4xx": [
          {
            "group": "Erro400",
            "optional": false,
            "field": "400",
            "description": "<p>Dados não especificados</p>"
          }
        ]
      }
    },
    "description": "<p>Adiciona um novo agendamento ao conjunto de agendamentos</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/AgendamentosController.php",
    "groupTitle": "Agendamentos"
  },
  {
    "type": "put",
    "url": "/agendamentos/:id",
    "title": "Atualiza um agendamento novo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do agendamento.</p>"
          }
        ]
      }
    },
    "name": "Atualizar_Agendamento",
    "group": "Agendamentos",
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso200",
            "type": "Object[]",
            "optional": false,
            "field": "agendamentos",
            "description": "<p>Lista de todos os agendamentos</p>"
          },
          {
            "group": "Sucesso200",
            "type": "Number",
            "optional": false,
            "field": "agendamentos.id",
            "description": "<p>Identificador do agendamento</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeResponsavel",
            "description": "<p>Nome do responsável que agendou o dia</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeTurma",
            "description": "<p>Nome da turma que irá utilizar a sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.data",
            "description": "<p>Data em que a sala irá ser utilizada</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.id_sala",
            "description": "<p>Identificador da sala que será utilizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"id\": 4,\n      \"nomeResponsavel\": \"Nome do responsavel 02\",\n      \"nomeTurma\": \"Nome da turma A\",\n      \"data\": \"2019-11-19 00:00:00\",\n      \"id_sala\": 3\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "23000",
            "description": "<p>O valor da chave estrangeira não corresponde a nenhuma ocorrencia em [Sala] ou há um campo não-nulo com valor nulo</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "HY000",
            "description": "<p>Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "22001",
            "description": "<p>Um dos campos excedeu o limite de caracteres</p>"
          }
        ],
        "Erro 4xx": [
          {
            "group": "Erro400",
            "optional": false,
            "field": "400",
            "description": "<p>Dados não especificados</p>"
          }
        ]
      }
    },
    "description": "<p>Atualiza um agendamento existente ao conjunto de agendamentos</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/AgendamentosController.php",
    "groupTitle": "Agendamentos"
  },
  {
    "type": "delete",
    "url": "/agendamentos/:id",
    "title": "Deleta um agendamento existente",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do agendamento.</p>"
          }
        ]
      }
    },
    "name": "Deletar_Agendamento",
    "group": "Agendamentos",
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso200",
            "type": "Object[]",
            "optional": false,
            "field": "agendamentos",
            "description": "<p>Lista de todos os agendamentos</p>"
          },
          {
            "group": "Sucesso200",
            "type": "Number",
            "optional": false,
            "field": "agendamentos.id",
            "description": "<p>Identificador do agendamento</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeResponsavel",
            "description": "<p>Nome do responsável que agendou o dia</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeTurma",
            "description": "<p>Nome da turma que irá utilizar a sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.data",
            "description": "<p>Data em que a sala irá ser utilizada</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.id_sala",
            "description": "<p>Identificador da sala que será utilizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": 200,\n    \"mensagem\": \"Agendamento deletado com sucesso!\",\n    \"status_Code\": 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          }
        ],
        "Erro 4xx": [
          {
            "group": "Erro400",
            "optional": false,
            "field": "400",
            "description": "<p>Agendamento não encontrado</p>"
          }
        ]
      }
    },
    "description": "<p>Atualiza um agendamento existente ao conjunto de agendamentos</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/AgendamentosController.php",
    "groupTitle": "Agendamentos"
  },
  {
    "type": "get",
    "url": "/agendamentos/",
    "title": "Retorna a lista de todos os agendamentos",
    "name": "Listar_Agendamentos",
    "group": "Agendamentos",
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso200",
            "type": "Object[]",
            "optional": false,
            "field": "agendamentos",
            "description": "<p>Lista de todos os agendamentos</p>"
          },
          {
            "group": "Sucesso200",
            "type": "Number",
            "optional": false,
            "field": "agendamentos.id",
            "description": "<p>Identificador do agendamento</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeResponsavel",
            "description": "<p>Nome do responsável que agendou o dia</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeTurma",
            "description": "<p>Nome da turma que irá utilizar a sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.data",
            "description": "<p>Data em que a sala irá ser utilizada</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.id_sala",
            "description": "<p>Identificador da sala que será utilizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "  HTTP/1.1 200 OK\n[\n    {\n        \"id\": 4,\n        \"nomeResponsavel\": \"Nome do responsavel\",\n        \"nomeTurma\": \"Nome da turma\",\n        \"data\": \"2019-11-18 00:00:00\",\n        \"id_sala\": 2\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          }
        ]
      }
    },
    "description": "<p>Retorna uma lista com todos os agendamentos cadastrados</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/AgendamentosController.php",
    "groupTitle": "Agendamentos"
  },
  {
    "type": "get",
    "url": "/agendamentos/:id",
    "title": "Retorna o registro de um agendamento",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do agendamento.</p>"
          }
        ]
      }
    },
    "name": "Obter_Sala",
    "group": "Agendamentos",
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso200",
            "type": "Object[]",
            "optional": false,
            "field": "agendamentos",
            "description": "<p>Lista de todos os agendamentos</p>"
          },
          {
            "group": "Sucesso200",
            "type": "Number",
            "optional": false,
            "field": "agendamentos.id",
            "description": "<p>Identificador do agendamento</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeResponsavel",
            "description": "<p>Nome do responsável que agendou o dia</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeTurma",
            "description": "<p>Nome da turma que irá utilizar a sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.data",
            "description": "<p>Data em que a sala irá ser utilizada</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.id_sala",
            "description": "<p>Identificador da sala que será utilizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"id\": 4,\n      \"nomeResponsavel\": \"Nome do responsavel\",\n      \"nomeTurma\": \"Nome da turma\",\n      \"data\": \"2019-11-18 00:00:00\",\n      \"id_sala\": 2\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          }
        ]
      }
    },
    "description": "<p>Retorna os dados de um agendamento</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/AgendamentosController.php",
    "groupTitle": "Agendamentos"
  },
  {
    "type": "get",
    "url": "/agendamentos/sala/:id",
    "title": "Retorna o registro de um agendamento pelo id da sala",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da sala.</p>"
          }
        ]
      }
    },
    "name": "Obter_Sala",
    "group": "Agendamentos",
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso200",
            "type": "Object[]",
            "optional": false,
            "field": "agendamentos",
            "description": "<p>Lista de todos os agendamentos</p>"
          },
          {
            "group": "Sucesso200",
            "type": "Number",
            "optional": false,
            "field": "agendamentos.id",
            "description": "<p>Identificador do agendamento</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeResponsavel",
            "description": "<p>Nome do responsável que agendou o dia</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.nomeTurma",
            "description": "<p>Nome da turma que irá utilizar a sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.data",
            "description": "<p>Data em que a sala irá ser utilizada</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "agendamentos.id_sala",
            "description": "<p>Identificador da sala que será utilizada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"id\": 4,\n      \"nomeResponsavel\": \"Nome do responsavel\",\n      \"nomeTurma\": \"Nome da turma\",\n      \"data\": \"2019-11-18 00:00:00\",\n      \"id_sala\": 2\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          }
        ]
      }
    },
    "description": "<p>Retorna os dados de um agendamento</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/AgendamentosController.php",
    "groupTitle": "Agendamentos"
  },
  {
    "type": "post",
    "url": "/salas/",
    "title": "Adiciona uma sala nova",
    "name": "Adicionar_Sala",
    "group": "Salas",
    "success": {
      "fields": {
        "Sucesso 201": [
          {
            "group": "Sucesso201",
            "type": "Object",
            "optional": false,
            "field": "salas",
            "description": "<p>Objeto do tipo sala</p>"
          },
          {
            "group": "Sucesso201",
            "type": "Number",
            "optional": false,
            "field": "salas.id",
            "description": "<p>Identificador da sala</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "salas.nome",
            "description": "<p>Nome da sala</p>"
          },
          {
            "group": "Sucesso201",
            "type": "String",
            "optional": false,
            "field": "salas.descricao",
            "description": "<p>Descrição da sala</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 201 OK\n    {\n       \"id\": 3,\n       \"nome\": \"Noma da sala\",\n       \"descricao\": \"descricao da sala\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "HY000",
            "description": "<p>Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "22001",
            "description": "<p>Um dos campos excedeu o limite de caracteres</p>"
          }
        ],
        "Erro 4xx": [
          {
            "group": "Erro400",
            "optional": false,
            "field": "400",
            "description": "<p>Dados não especificados</p>"
          }
        ]
      }
    },
    "description": "<p>Adiciona uma nova sala ao conjunto de salas</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/SalasController.php",
    "groupTitle": "Salas"
  },
  {
    "type": "put",
    "url": "/salas/:id",
    "title": "Atualiza uma sala nova",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da sala</p>"
          }
        ]
      }
    },
    "name": "Atualizar_Sala",
    "group": "Salas",
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso200",
            "type": "Object",
            "optional": false,
            "field": "salas",
            "description": "<p>Objeto do tipo sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "Number",
            "optional": false,
            "field": "salas.id",
            "description": "<p>Identificador da sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "salas.nome",
            "description": "<p>Nome da sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "salas.descricao",
            "description": "<p>Descrição da sala</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n    {\n       \"id\": 3,\n       \"nome\": \"Noma da sala 02\",\n       \"descricao\": \"descricao sobre a sala\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "HY000",
            "description": "<p>Um dos campos não possui um valor padrão definido. Por favor, informe todos os valores obrigatórios</p>"
          },
          {
            "group": "Request",
            "optional": false,
            "field": "22001",
            "description": "<p>Um dos campos excedeu o limite de caracteres</p>"
          }
        ],
        "Erro 4xx": [
          {
            "group": "Erro400",
            "optional": false,
            "field": "400",
            "description": "<p>Dados não especificados</p>"
          }
        ]
      }
    },
    "description": "<p>Atualiza uma sala existente ao conjunto de salas</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/SalasController.php",
    "groupTitle": "Salas"
  },
  {
    "type": "delete",
    "url": "/salas/:id",
    "title": "Deleta uma sala nova",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da sala</p>"
          }
        ]
      }
    },
    "name": "Deletar_Sala",
    "group": "Salas",
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso200",
            "type": "Object",
            "optional": false,
            "field": "mensagem",
            "description": "<p>Objeto do tipo mensagem</p>"
          },
          {
            "group": "Sucesso200",
            "type": "Number",
            "optional": false,
            "field": "salas.codigo",
            "description": "<p>Identificador da mensagem</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "salas.mensagem",
            "description": "<p>Descrição da mensagem</p>"
          },
          {
            "group": "Sucesso200",
            "type": "number",
            "optional": false,
            "field": "salas.status_code",
            "description": "<p>Código do resultado da requição</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n{\n    \"codigo\": 200,\n    \"mensagem\": \"Sala deletada com sucesso!\",\n    \"status_Code\": 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          }
        ],
        "Erro 4xx": [
          {
            "group": "Erro400",
            "optional": false,
            "field": "400",
            "description": "<p>Sala não encontrada</p>"
          }
        ]
      }
    },
    "description": "<p>Atualiza uma sala existente ao conjunto de salas</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/SalasController.php",
    "groupTitle": "Salas"
  },
  {
    "type": "get",
    "url": "/salas/",
    "title": "Retorna a lista de salas",
    "name": "Listar_Salas",
    "group": "Salas",
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso200",
            "type": "Object[]",
            "optional": false,
            "field": "salas",
            "description": "<p>Lista de salas</p>"
          },
          {
            "group": "Sucesso200",
            "type": "Number",
            "optional": false,
            "field": "salas.id",
            "description": "<p>Identificador da sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "salas.nome",
            "description": "<p>Nome da sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "salas.descricao",
            "description": "<p>Descrição da sala</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n[\n    {\n       \"id\": 3,\n       \"nome\": \"Noma da sala\",\n       \"descricao\": \"descricao da sala\"\n    },\n    {\n        \"id\": 4,\n        \"nome\": \"Noma da sala 2\",\n        \"descricao\": \"descricao da sala 2\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          }
        ]
      }
    },
    "description": "<p>Retorna uma lista com todas as salas cadastradas</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/SalasController.php",
    "groupTitle": "Salas"
  },
  {
    "type": "get",
    "url": "/salas/:id",
    "title": "Retorna o registro de uma sala",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da sala</p>"
          }
        ]
      }
    },
    "name": "Obter_Sala",
    "group": "Salas",
    "success": {
      "fields": {
        "Sucesso 200": [
          {
            "group": "Sucesso200",
            "type": "Object",
            "optional": false,
            "field": "salas",
            "description": "<p>Objeto do tipo sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "Number",
            "optional": false,
            "field": "salas.id",
            "description": "<p>Identificador da sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "salas.nome",
            "description": "<p>Nome da sala</p>"
          },
          {
            "group": "Sucesso200",
            "type": "String",
            "optional": false,
            "field": "salas.descricao",
            "description": "<p>Descrição da sala</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n    {\n       \"id\": 3,\n       \"nome\": \"Noma da sala\",\n       \"descricao\": \"descricao da sala\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erro Request": [
          {
            "group": "Request",
            "optional": false,
            "field": "2002",
            "description": "<p>Não foi possivel conectar ao banco de dados</p>"
          }
        ]
      }
    },
    "description": "<p>Retorna os dados de uma sala</p>",
    "version": "0.0.0",
    "filename": "controle-salas-api/app/Http/Controllers/SalasController.php",
    "groupTitle": "Salas"
  }
] });
