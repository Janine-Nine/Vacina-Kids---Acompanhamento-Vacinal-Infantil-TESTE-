# 💉 Vacina Kids - Sistema de Acompanhamento da Vacinação Infantil

![Vacina Kids](assets/img/logo-vacina-kids.png)

## 📋 Sobre o Projeto

O **Vacina Kids** é um sistema web desenvolvido para auxiliar pais, responsáveis e profissionais da saúde no acompanhamento do calendário vacinal infantil.

A plataforma permite gerenciar crianças cadastradas, acompanhar o histórico de vacinação, visualizar campanhas de imunização, monitorar indicadores vacinais e gerar relatórios de acompanhamento.

O objetivo do sistema é contribuir para a prevenção de doenças, incentivar a vacinação infantil e facilitar o controle das doses aplicadas.

---

# 🎯 Objetivos

* Facilitar o acompanhamento da vacinação infantil.
* Reduzir atrasos no calendário vacinal.
* Disponibilizar informações sobre campanhas de vacinação.
* Gerar relatórios e indicadores de imunização.
* Promover a conscientização sobre a importância das vacinas.

---

# ✨ Funcionalidades

## 🔐 Login

* Autenticação de usuário.
* Controle de acesso.
* Logout seguro.

## 🏠 Home

* Apresentação do sistema.
* Informações institucionais.
* Banner principal.

## 📊 Dashboard

* Percentual de vacinas em dia.
* Percentual de vacinas pendentes.
* Percentual de vacinas em andamento.
* Indicadores visuais.

## 👶 Gestão de Crianças

* Cadastro de crianças.
* Consulta de perfil.
* Histórico vacinal.
* Status vacinal.

## 📅 Calendário Vacinal

* Visualização de datas.
* Próximas vacinas.
* Organização por mês e ano.

## 📢 Campanhas

* Divulgação de campanhas.
* Datas de vacinação.
* Locais de atendimento.
* Endereços das unidades de saúde.

## 📑 Relatórios

* Relatórios gerenciais.
* Exportação de dados.
* Indicadores estatísticos.

## ⚙️ Configurações

* Dados do responsável.
* Preferências do usuário.
* Atualização de perfil.

---

# 🖥️ Tecnologias Utilizadas

## Front-End

* Angular 21.2.17
* Ionic 8.2.0
* TypeScript 5.4.2
* SCSS

## Back-End / Banco de Dados

* Firebase Authentication
* Firestore Database
* Firebase Hosting

## Ferramentas

* Visual Studio Code
* Git
* GitHub
* Angular CLI

---

# 📁 Estrutura do Projeto

```text
src/
│
├── app/
│   ├── pages/
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   ├── criancas/
│   │   └── campanhas/
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
│
├── pages/
│   └── dashboard/
│
├── services/
│   ├── auth.service.ts
│   ├── child.service.ts
│   ├── vaccine.service.ts
│   ├── campaign.service.ts
│   └── vaccination-record.service.ts
│
├── models/
│   ├── child.model.ts
│   ├── vaccine.model.ts
│   ├── campaign.model.ts
│   └── vaccination-record.model.ts
│
├── shared/
│   └── components/
│       ├── child-card/
│       ├── vaccine-card/
│       ├── campaign-card/
│       └── status-badge/
│
├── theme/
│   └── variables.scss
│
└── styles.scss
```

---

# 🎨 Identidade Visual

| Elemento        | Cor     |
| --------------- | ------- |
| Verde Principal | #ABC270 |
| Amarelo         | #FEC868 |
| Laranja         | #FDA769 |
| Marrom          | #473C33 |
| Branco          | #FFFFFF |
| Cinza Claro     | #F8F9FA |

---

# 🚀 Como Executar o Projeto

## Pré-requisitos

* Node.js (v18 ou superior)
* npm ou yarn

## Clonar Repositório

```bash
git clone https://github.com/seu-usuario/vacina-kids.git
```

## Entrar na Pasta

```bash
cd vacina-kids
```

## Instalar Dependências

```bash
npm install
```

## Executar em Desenvolvimento

```bash
npm start
```

ou

```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200`

## Build para Produção

```bash
npm run build
```

ou

```bash
ng build --configuration production
```

---

# 📸 Telas do Sistema

## Login

* Acesso ao sistema.

## Home

* Página inicial.

## Dashboard

* Indicadores vacinais.

## Crianças

* Cadastro e histórico.

## Calendário

* Agenda de vacinação.

## Campanhas

* Eventos e ações de imunização.

## Relatórios

* Dados e estatísticas.

## Configurações

* Perfil do usuário.

---

# 🔒 Segurança

* Validação de formulários.
* Controle de sessões.
* Armazenamento local seguro.
* Preparado para autenticação Firebase.

---

# 📈 Melhorias Futuras

* Integração com Firebase Authentication.
* Banco de dados Firestore.
* Notificações Push.
* Aplicativo Mobile com Ionic.
* Dashboard com gráficos.
* Exportação PDF.
* Exportação Excel.
* Integração com API do Ministério da Saúde.

---

# 👩‍💻 Autora

**Janine Cunha**

Estudante de Tecnologia da Informação, Desenvolvimento Web e Programação.

Áreas de interesse:

* Desenvolvimento Front-End
* Desenvolvimento Full Stack
* Inteligência Artificial
* Desenvolvimento Mobile
* Banco de Dados
* UX/UI Design

---

# 🤝 Contribuição

Contribuições são bem-vindas.

Para contribuir:

1. Faça um Fork.
2. Crie uma Branch.
3. Realize as alterações.
4. Faça Commit.
5. Envie um Pull Request.

---

# 📄 Licença MIT

MIT License

Copyright (c) 2026 Janine Cunha

Fica concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o "Software"), para utilizar o Software sem restrições, incluindo, sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do Software, e permitir às pessoas a quem o Software for fornecido fazê-lo, sujeitando-se às seguintes condições:

O aviso de direitos autorais acima e este aviso de permissão deverão ser incluídos em todas as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO.

EM NENHUMA CIRCUNSTÂNCIA OS AUTORES OU DETENTORES DOS DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANO OU OUTRA RESPONSABILIDADE, SEJA EM AÇÃO CONTRATUAL, EXTRACONTRATUAL OU OUTRA, DECORRENTE DE, OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO SOFTWARE.

---




