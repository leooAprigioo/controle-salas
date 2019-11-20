# controle-salas

## Banco de Dados
Foi utilizado o banco de dados MySQL e o mesmo é necessário para o funcionamento do projeto.
Acesse a pasta _controle-salas-bd_ e execute o script em seu servidor MySQL

## API
A API foi desenvolvida em PHP, utilizando o frameweok Laravel.

### Pre-requisitos:
* O Apache instalado na maquina
* O MySQL >= 8 instalado na maquina
* O PHP >= v7.1.3 instalado na maquina
* O Composer instalado na maquina

Após ter os requisitos instalados, o Laravel pode ser instalado via Composer através do comando:

    composer global required laravel/installer
    
Com o laravel instalado, acesse a pasta _controle-salas-api_ e insira o comando:
    php artisan serve

### Configuração do banco de dados
É necessário configurar os dados de acesso ao banco de dados antes de iniciar.
Dentro da pasta _controle-salas-api_:
1. Abre o arquivo _.env_ com um editor de texto
1. Altere a configuração _DB_CONNECTION_ para as configurações que se adequem ao seu servidor de banco de dados
1. Salve o arquivo
1. Reinicie o servidor Laravel

## Angular
Para o front-end foi utilizado o frameweok Angular

### Pre-requisitos:
* O NPM instalado na maquina
* O NodeJS instalado na maquina

Após ter os requisitos instalados, o Angular pode ser instalado via NPM através do comando:

    npm install -g @angular/cli
    
Com o Angular instalado, acesse a pasta _controle-salas_ e insira o comando:
    ng serve
    
Caso a URL da API seja diferente de
    http://localhost:8000
Você pode alterar o endereço no projeto ao alterar o arquivo _controle-salas/src/app/config/conexao-bd.ts_

## Documentação
Para a documentação foram utilizados 2 bibliotecas diferentes: _Apidoc_ e _Compodoc_

### Documentação API
A documentação da API pode ser encontrada ao acessar a pasta _api-docs_ , localizado na raiz do repositório, e executando o arquivo _index.html_

### Documentação Angular
A documentação do front-end pode ser encontrada, manualmente, na pasta _controle-salas/documentation_ e aberta ao exercutar o arquivo _index.html_
Essa documentação tambem pode ser acessada ao entrar na pasta do projeto _controle-salas_ e executar o comando:
    npm run serve-docs
Um servidor vai iniciar e a URL da documentação será exibida no terminal.
