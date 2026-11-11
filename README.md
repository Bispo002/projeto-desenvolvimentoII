# Habit Tracker API — Sistema de Gestão de Hábitos

> Projeto desenvolvido para a disciplina de **Projeto de Desenvolvimento de Software II**.

---

## 📌 Descrição do Projeto

API RESTful desenvolvida em **Node.js** com banco de dados **MongoDB** para gerenciamento e acompanhamento de hábitos e rotinas diárias. O projeto contempla todas as 4 operações fundamentais de **CRUD** (Create, Read, Update, Delete) com validação de schemas via Mongoose.

---

## 🛠️ Tecnologias Utilizadas

- **Runtime:** Node.js (v18+ LTS)
- **Framework Web:** Express.js (v4.x)
- **Banco de Dados:** MongoDB Community Edition (NoSQL)
- **ODM / Driver:** Mongoose
- **Testes de API:** Postman / PowerShell (`Invoke-RestMethod`)

---

## 📁 Estrutura do Repositório

```text
.
├── docs/                     # Documentação acadêmica do projeto (Parte I)
├── src/
│   ├── config/
│   │   └── db.js             # Conexão com o MongoDB
│   ├── controllers/
│   │   └── habitController.js# Lógica de negócio e handlers do CRUD
│   ├── models/
│   │   └── Habit.js          # Schema Mongoose
│   ├── routes/
│   │   └── habitRoutes.js    # Endpoints e verbos HTTP
│   └── app.js                # Ponto de entrada da aplicação Express
├── .gitignore                # Arquivos ignorados pelo Git (node_modules, logs)
├── package.json              # Dependências do projeto Node.js
└── README.md                 # Documentação principal
