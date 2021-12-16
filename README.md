# challenge-estantevirtual
EstanteVirtual Challenge - TypeScript Back End

Com a chegada dos jogos olímpicos, fomos designados para construir uma API **REST** em **Ruby** para o COB (Comitê Olímico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

* 100m rasos: Menor tempo vence
* Lançamento de Dardo: Maior distância vence

## API
Através da API, deveremos ser capazes de:

1. Criar uma competição
2. Cadastrar resultados para uma competição (todos os campos são obrigatórios),
ex:
```json
{
  "competicao": "100m classificatoria 1",
  "atleta": "Joao das Neves",
  "value": "10.234",
  "unidade": "s"
}
```
ex:
```json
{
  "competicao": "Dardo semifinal",
  "atleta": "Claudio",
  "value": "70.43",
  "unidade": "m"
}
```
3. Finalizar uma competição.
4. Retornar o ranking da competição, exibindo a posição final de cada atleta.

==========================

#### Configurando um banco de dados para testar a solução
- Criar um arquivo .env na root do projeto, ou seja, onde encontra-se o package.json.
- Inserir as informações abaixo no arquivo .env com seus respectivos valores:

DB_HOST = "Name or IP address of the server host"<br/>
DB_USER = "Name of the user to connect with"<br/>
DB_PASSWORD = "The user's password"<br/>
DB_SCHEMA = "The schema to use"

#### Solução
Rode os seguintes comandos dentro da pasta que estiver com o package.json.
- npm run migrations
- npm run dev or npm start

#### Link da Documentação
- https://documenter.getpostman.com/view/16818323/UVR7LoJ9

## O que temos aqui?
- [x]  NodeJS
- [x]  TypeScript
- [x]  Express
- [x]  SQL
- [x]  Nodemon
- [x]  UUID

## INTEGRANTE
Perfil      | Link do perfil no GITHUB
--------- | ------
[<img src="https://avatars.githubusercontent.com/u/52759918?v=4" width="75px;"/>](https://github.com/vinnivso) | [Vinícius Oliveira](https://github.com/vinnivso)
