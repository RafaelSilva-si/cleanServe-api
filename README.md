# API CleanService - Documentação

## Visão Geral
Bem-vindo à documentação da API do Software de Higienização CleanService. Essa API é uma aplicação web que permite o gerenciamento eficiente de clientes, orçamentos e agendamentos para negócios de higienização. A aplicação é composta por um backend desenvolvido em Nest.js, um framework em Node.js, e um frontend desenvolvido em React.js. Os dados são armazenados de forma segura em um banco de dados PostgreSQL.

## Funcionalidades do Software:

### Gerenciamento de Clientes:
* Cadastro de novos clientes com informações como nome, endereço, telefone e e-mail.
* Visualização de todos os clientes cadastrados no sistema.
* Detalhes de um cliente específico com base no seu identificador (ID).
* Atualização das informações de um cliente existente.
* Remoção de um cliente específico.

### Gerenciamento de Orçamentos:
* Criação de novos orçamentos para serviços de higienização.
* Listagem de todos os orçamentos cadastrados.
* Detalhes de um orçamento específico com base no seu identificador (ID).
* Atualização das informações de um orçamento existente.
   
### Gerenciamento de Agendamentos:
* Agendamento de serviços de higienização para clientes.
* Listagem de todos os agendamentos cadastrados.
* Detalhes de um agendamento específico com base no seu identificador (ID).
* Atualização das informações de um agendamento existente.

### Integração com Banco de Dados:
* Armazenamento seguro e organizado de todos os dados, incluindo clientes, orçamentos e agendamentos.
* Utilização de banco de dados PostgreSQL para garantir a persistência dos dados.

### Autenticação e Autorização:
* Autenticação de usuários para garantir acesso seguro às funcionalidades do sistema.
* Restrição de acesso a funcionalidades específicas com base nas permissões do usuário.

Essas são algumas das principais funcionalidades do software de higienização. Ele oferece um conjunto completo de recursos para facilitar o gerenciamento de clientes, orçamentos e agendamentos, contribuindo para uma gestão mais eficiente do negócio de higienização.

## Requisitos de Sistema
Para utilizar a API do Software de Higienização, certifique-se de ter as seguintes dependências instaladas:

* Node.js
* PostgreSQL

## Endpoints da API
A seguir estão os endpoints disponíveis para interagir com a API:

### Login
- POST /login

#### Requisição

```json
{
  "email": "usuario@example.com",
  "senha": "senha_do_usuario"
}
```

#### Resposta
- OK
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

- Erro
```json
{
  "statusCode": 401,
  "message": "Credenciais inválidas"
}
```


### Clientes
* GET /clients: Retorna todos os clientes cadastrados no sistema.
* GET /clients/🆔: Retorna os detalhes de um cliente específico com base no seu identificador (ID).
* POST /clients: Cria um novo cliente com base nos dados fornecidos no corpo da requisição.
* PATCH /clients/🆔: Atualiza as informações de um cliente existente com base no seu identificador (ID).
* DELETE /clients/🆔: Remove um cliente específico com base no seu identificador (ID).

### Usuários
* GET /users: Retorna todos os usuários cadastrados no sistema.
* GET /users/🆔: Retorna os detalhes de um usuário específico com base no seu identificador (ID).
* POST /users: Cria um novo usuário com base nos dados fornecidos no corpo da requisição.
* PATCH /users/🆔: Atualiza as informações de um usuário existente com base no seu identificador (ID).
* DELETE /users/🆔: Remove um usuário específico com base no seu identificador (ID).

### Serviços
* GET /services: Retorna todos os serviços cadastrados no sistema.
* GET /services/🆔: Retorna os detalhes de um serviço específico com base no seu identificador (ID).
* POST /services: Cria um novo serviço com base nos dados fornecidos no corpo da requisição.
* PATCH /services/🆔: Atualiza as informações de um serviço existente com base no seu identificador (ID).
* DELETE /services/🆔: Remove um serviço específico com base no seu identificador (ID).
  
### Orçamentos
* POST /budget: Cria um novo orçamento com base nos dados fornecidos no corpo da requisição.
* GET /budget: Retorna todos os orçamentos cadastrados no sistema.
* GET /budget/🆔: Retorna os detalhes de um orçamento específico com base no seu identificador (ID).
* PATCH /budget/🆔: Atualiza as informações de um orçamento existente com base no seu identificador (ID)s.

### Ordens de Serviço (Service Order)
* POST /service-order: Cria uma nova ordem de serviço com base nos dados fornecidos no corpo da requisição.
* GET /service-order: Retorna todas as ordens de serviço cadastradas no sistema.
* GET /service-order/🆔: Retorna os detalhes de uma ordem de serviço específica com base no seu identificador (ID).
* PATCH /service-order/🆔: Atualiza as informações de uma ordem de serviço existente com base no seu identificador (ID).

### Autenticação e Autorização
Para garantir a segurança e privacidade dos dados, a API utiliza autenticação e autorização. Certifique-se de fornecer as credenciais adequadas ao fazer as requisições.

### Formato de Respostas
A API retorna as respostas em formato JSON, e em caso de erros, são fornecidos códigos de status HTTP apropriados, juntamente com mensagens descritivas.

## Conclusão

Agradecemos por explorar a documentação da API CleanService! Essa API foi desenvolvida como um projeto didático e de estudo para demonstrar conceitos de construção de APIs usando o framework Nest.js. Ela oferece funcionalidades básicas de gerenciamento de clientes, orçamentos e agendamentos, usando um banco de dados PostgreSQL para armazenamento seguro. Sinta-se à vontade para explorar os endpoints disponíveis e experimentar as diferentes operações. Esperamos que essa documentação tenha sido útil para você aprender e praticar. Se tiver alguma dúvida ou feedback, não hesite em entrar em contato. Obrigado por usar a API CleanService como parte do seu aprendizado!
