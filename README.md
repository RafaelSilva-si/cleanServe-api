
Documentação do Software de Higienização
Visão Geral
O Software de Higienização é uma aplicação web que permite o gerenciamento de clientes, orçamentos e agendamentos para um negócio de higienização. A aplicação é composta por um backend desenvolvido em Nest.js, um framework em Node.js, e um frontend desenvolvido em React.js. Os dados são armazenados em um banco de dados PostgreSQL.

Requisitos de Sistema
Node.js
Sqlite

API Backend
A API do backend oferece os seguintes endpoints:

Clientes
GET /clientes: Retorna todos os clientes cadastrados.
GET /clientes/:id: Retorna os detalhes de um cliente específico.
POST /clientes: Cria um novo cliente.
PUT /clientes/:id: Atualiza as informações de um cliente existente.
DELETE /clientes/:id: Remove um cliente.
Orçamentos
GET /orcamentos: Retorna todos os orçamentos cadastrados.
GET /orcamentos/:id: Retorna os detalhes de um orçamento específico.
POST /orcamentos: Cria um novo orçamento.
PUT /orcamentos/:id: Atualiza as informações de um orçamento existente.
DELETE /orcamentos/:id: Remove um orçamento.
Agendamentos
GET /agendamentos: Retorna todos os agendamentos cadastrados.
GET /agendamentos/:id: Retorna os detalhes de um agendamento específico.
POST /agendamentos: Cria um novo agendamento.
PUT /agendamentos/:id: Atualiza as informações de um agendamento existente.
DELETE /agendamentos/:id: Remove um agendamento.
