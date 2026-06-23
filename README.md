# 🚀 Backend Users API

<br>

### API REST desenvolvida com Node.js, TypeScript e PostgreSQL para gerenciamento de usuários.

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.simpleicons.org/render/000000" height="40" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.simpleicons.org/postman/FF6C37" height="40" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.simpleicons.org/neon/00E699" height="40" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" />
</p>

### API OnlineA API está disponível em: https://back-end-users-api.onrender.com

### Documentação da API, Link:  https://documenter.getpostman.com/view/46945043/2sBXwwmSn3

<br>

---

<br>

### 📌 Funcionalidades
✅ Cadastro de usuários

✅ Listagem de usuários

✅ Busca por ID

✅ Atualização de dados

✅ Remoção de usuários

✅ Validação com middleware

✅ Proteção de dados com DTO

✅ Testes automatizados com Postman

<br>

---

<br>

### 🧱 Tecnologias
- Node.js
- TypeScript
- Express
- PostgreSQL
- pg (node-postgres)

<br>

---

<br>

### 📂 Estrutura do Projeto
src/

├── controllers

├── services

├── repositories

├── middlewares

├── dtos

├── database

<br>

---

<br>

### ▶️ Como rodar o projeto localmente

- git clone https://github.com/MatheusBrayer/Back-End-Users-API.git
- cd Back-End-Users-API
- npm install
- npm run dev

<br>

---

<br>

### ⚙️ Variáveis de ambiente
**Crie um arquivo .env na raiz do projeto:**
- DB_USER=postgres
- DB_PASSWORD=sua_senha
- DB_NAME=backend_users
- DB_HOST=localhost
- DB_PORT=5432

<br>

---

<br>

### 🧪 Testes
- Testes realizados utilizando Postman
- Validação de status HTTP
- Validação de estrutura das respostas
- Testes de sucesso e erro nos endpoints

<br>

---

<br>

### 📬 Endpoints

<br>

> ### ➕ Criar usuário
> **POST /users** <br>
> 
>     JSON 
>     { 
>       "name": "Matheus", 
>       "email": "matheus@test.com", 
>       "password": "123456"
>     }

<br>

> ### 📋 Listar usuários 
> **GET /users**

<br>

> ### 🔍 Buscar usuário por ID
> **GET /users/:id**

<br>

> ### ✏️ Atualizar usuário
> **PUT /users/:id**
> 
>     JSON 
>     { 
>       "name": "Matheus", 
>       "email": "novoemail@test.com", 
>       "password": "123456"
>     }

<br>

> ### ❌ Deletar usuário
> **DELETE /users/:id**

<br>

---

<br>

### 🚀 Deploy
- Backend hospedado no Render, link: https://back-end-users-api.onrender.com
- Banco de dados PostgreSQL hospedado no Neon

<br>

---

<br>

### 📋 Documentação da API
- Documentação da API via Postamn, Link: https://documenter.getpostman.com/view/46945043/2sBXwwmSn3

<br>

---

<br>

### 📖 Autor
Desenvolvido por Matheus Brayer 👊
